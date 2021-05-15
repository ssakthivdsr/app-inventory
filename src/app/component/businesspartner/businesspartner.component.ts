import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { BusinessPartner } from '../../model/businesspartner.model';
import { BusinessPartnerService } from '../../service/businesspartner.service';

@Component({
  selector: 'app-businesspartner',
  templateUrl: './businesspartner.component.html',
  styleUrls: ['./businesspartner.component.css']
})
export class BusinesspartnerComponent implements OnInit {

  public addBusFormGroup: FormGroup;
  public businessPartnerModel = new BusinessPartner();

  public constructor(private titleService: Title, private _snackBar: MatSnackBar, private dialog: MatDialog, private router: Router, private businessPartnerService: BusinessPartnerService) {
    this.titleService.setTitle("Inventory - Business Partner Details");
    this.addBusFormGroup = new FormGroup({});
  }

  check() {
    this.businessPartnerModel.applicationId = 62;
    this.businessPartnerModel.primaryBusinessPartner = this.addBusFormGroup.get('PriBusPart')!.value;
    if (this.businessPartnerModel.secondaryBusinessPartner === '' || this.businessPartnerModel.businessPartnerManagers === '' ||
      this.businessPartnerModel.businessPartnerDirectors === '')
      return true;
    else
      return false;
  }

  ngOnInit(): void {
    this.addBusFormGroup = new FormGroup({
      PriBusPart: new FormControl('', [Validators.required])
    });
  }

  openDialog() {
    this.dialog.open(BusinessPartnerDialog, {
      data: this.businessPartnerModel
    });
  }

  save() {
    //console.log("Saved");
    this.businessPartnerService.storeBusinessPartnerDetails(this.businessPartnerModel).subscribe((data: any) => {
      //console.log(data);
    })
    this.openSnackBar();
  }

  cancel() {
    this.router.navigate(['/landingPage']);
  }

  openSnackBar() {
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

export class BusinessPartnerDialog {

  businessPartnerModelDialog = new BusinessPartner();

  constructor(public dialogRef: MatDialogRef<BusinessPartnerDialog>, public dialog: MatDialog, private _snackBar: MatSnackBar, private businessPartnerService: BusinessPartnerService, @Inject(MAT_DIALOG_DATA) public data: any) {
    this.businessPartnerModelDialog = data;
  }

  save() {
    //console.log("saved");
    this.businessPartnerService.storeBusinessPartnerDetails(this.businessPartnerModelDialog).subscribe((data: any) => {
      //console.log(data);
    })
    this.openSnackBar();
  }

  openSnackBar() {
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