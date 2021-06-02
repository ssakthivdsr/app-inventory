import { Component, OnInit, ChangeDetectorRef, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { BusinessPartnerService } from 'src/app/service/businesspartner.service';
import { BusinessPartner } from 'src/app/model/businesspartner.model';


@Component({
  selector: 'app-businesspartner',
  templateUrl: './businesspartner.component.html',
  styleUrls: ['./businesspartner.component.css']
})
export class BusinesspartnerComponent implements OnInit {
  public addBusFormGroup: FormGroup;
  businesspartnerModel = new BusinessPartner();
  businesspartnersRetrieved: BusinessPartner[] = [];
  LocalStorageValue: Number;


  public constructor(private titleService: Title, private _snackBar: MatSnackBar, private dialog: MatDialog, private router: Router, private businessPartnerService: BusinessPartnerService,
    private changeDetectorRefs: ChangeDetectorRef) {
    this.titleService.setTitle("Inventory - Business Partner Details");
    this.addBusFormGroup = new FormGroup({});
  }

  check() {
    if (this.businesspartnerModel.secondaryBusinessPartner === '' || this.businesspartnerModel.businessPartnerManagers === '' ||
      this.businesspartnerModel.businessPartnerDirectors === '')
      return true;
    else
      return false;
  }

  ngOnInit() {
    this.LocalStorageValue = Number(localStorage.getItem('savedApplicationID'));
    this.addBusFormGroup = new FormGroup({
      BusPart: new FormControl('', [Validators.required])
    });
  }

  openDialog() {
    this.dialog.open(BusinessPartnerSaveWarningDialog, {
      data: this.businesspartnerModel
    });
  }
  checkAppId() {
    if (this.LocalStorageValue === Number(localStorage.getItem('savedApplicationID'))) {
      return true;
    }
    else {
      return false;
    }
  }
  save() {
    this.businesspartnerModel.applicationId = Number(localStorage.getItem('savedApplicationID'));
    //console.log(this.businesspartnerModel.applicationId);
    //console.log("Saved");
    this.businessPartnerService.storeBusinessPartnerDetails(this.businesspartnerModel).subscribe((data: any) => {
      //console.log(data);
      //console.log(localStorage.getItem('savedApplicationID'));
      this.openSnackBar(data);
    })

  }

  cancel() {
    localStorage.clear();
    this.router.navigate(['/landingPage']);
  }

  openSnackBar(id: number) {
    this._snackBar.open("Details are saved successfully", "Dismiss", {
      duration: 2000,
      verticalPosition: "top"
    });
  }

  public checkError = (controlName: string, errorName: string) => {
    return this.addBusFormGroup.controls[controlName].hasError(errorName);
  }
}

@Component({
  selector: 'business-partner-save-warning-dialog',
  templateUrl: 'business-partner-save-warning-dialog.html',
})

export class BusinessPartnerSaveWarningDialog {

  businesspartnerModelDialog = new BusinessPartner();

  constructor(public dialogRef: MatDialogRef<BusinessPartnerSaveWarningDialog>, public dialog: MatDialog, private _snackBar: MatSnackBar, private businessPartnerService: BusinessPartnerService,
    private changeDetectorRefs: ChangeDetectorRef, @Inject(MAT_DIALOG_DATA) public data: any) {
    this.businesspartnerModelDialog = data;
  }

  save() {
    //console.log("saved");
    this.businesspartnerModelDialog.applicationId = Number(localStorage.getItem('savedApplicationID'));
    this.businessPartnerService.storeBusinessPartnerDetails(this.businesspartnerModelDialog).subscribe((data: any) => {
      //console.log(data);
      //console.log(localStorage.getItem('savedApplicationID'));
      this.openSnackBar(data);
    })
  }

  openSnackBar(id: number) {
    this._snackBar.open("Details are saved successfully", "Dismiss", {
      duration: 2000,
      verticalPosition: "top"
    });
  }

  clickMethod() {
    this.save();
    this.dialogRef.close();
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}

