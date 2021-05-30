import { ChangeDetectorRef, Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Validators, FormGroup, FormControl, FormBuilder } from "@angular/forms";
import { ServiceManagement } from 'src/app/model/servicemanagement.model';
import { ServiceManagementService } from 'src/app/service/servicemanagement.service';

@Component({
  selector: 'app-servicemanagement',
  templateUrl: './servicemanagement.component.html',
  styleUrls: ['./servicemanagement.component.css']
})

export class ServicemanagementComponent implements OnInit {
  myForm: FormGroup;
  ValidNumberIndicator = true;
  serviceManagementModel: ServiceManagement[] = [];
  checkId: number;
  i: number;
  LocalStorageValue: Number;
  constructor(private fb: FormBuilder, private router: Router, private _snackBar: MatSnackBar, private dialog: MatDialog, private serviceManagementService: ServiceManagementService,
    private changeDetectorRefs: ChangeDetectorRef) {
    this.myForm = this.fb.group({
      f: new FormControl("", [Validators.pattern(/\d/)]),
      f1: new FormControl("", [Validators.pattern(/\d/)]),
      f2: new FormControl("", [Validators.pattern(/\d/)]),
      f3: new FormControl("", [Validators.pattern(/\d/)]),
      f4: new FormControl("", [Validators.pattern(/\d/)]),
      f5: new FormControl("", [Validators.pattern(/\d/)]),
      f6: new FormControl("", [Validators.pattern(/\d/)]),
      f7: new FormControl("", [Validators.pattern(/\d/)]),
      f8: new FormControl("", [Validators.pattern(/\d/)]),
      f9: new FormControl("", [Validators.pattern(/\d/)]),
      f10: new FormControl("", [Validators.pattern(/\d/)])
    });

  }



  check() {
    for (this.checkId = 0; this.checkId <= 46; this.checkId++) {
      if (this.serviceManagementModel[this.checkId].answer === '')
        return true;
    }
    return false;
  }

  openDialog() {
    this.dialog.open(ServiceManagementWarningDialog, {
      data: this.serviceManagementModel
    });
  }

  openSnackBar(id: number) {
    this._snackBar.open("Details are saved successfully", "Dismiss", {
      duration: 2000,
      verticalPosition: "top"
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
    for (this.i = 0; this.i < 47; this.i++) {
      this.serviceManagementModel[this.i].applicationId = Number(localStorage.getItem('savedApplicationID'));
    }
    //console.log("saved");
    this.serviceManagementService.storeAndupdateServiceManagementDetails(this.serviceManagementModel).subscribe((data: any) => {
      // console.log(data);
      this.openSnackBar(data);
    })

  }

  cancel() {
    localStorage.clear();
    this.router.navigate(['/landingPage']);
  }

  ngOnInit(): void {
    for (this.i = 0; this.i < 47; this.i++) {
      this.serviceManagementModel[this.i] = { serviceManagementId: 1, applicationId: 1, questionId: this.i + 1, answer: '' };
    }
    this.LocalStorageValue = Number(localStorage.getItem('savedApplicationID'));
  }
  onlyNumbers(event: { which: any; keyCode: any; }) {

    const ch = (event.which) ? event.which : event.keyCode;
    if (ch > 31 && (ch < 48 || ch > 57)) {
      this.ValidNumberIndicator = false;

      return this.ValidNumberIndicator;
    }
    this.ValidNumberIndicator = true;
    return this.ValidNumberIndicator;
  }
}

@Component({
  selector: 'service-management-warning-dialog',
  templateUrl: 'service-management-warning-dialog.html',
})

export class ServiceManagementWarningDialog {
  i: number;
  serviceManagementModelDialog: ServiceManagement[] = [];
  constructor(public dialogRef: MatDialogRef<ServiceManagementWarningDialog>, public dialog: MatDialog, private _snackBar: MatSnackBar, private serviceManagementService: ServiceManagementService,
    private changeDetectorRefs: ChangeDetectorRef, @Inject(MAT_DIALOG_DATA) public data: any) {
    this.serviceManagementModelDialog = data;
  }

  save() {
    for (this.i = 0; this.i < 47; this.i++) {
      this.serviceManagementModelDialog[this.i].applicationId = Number(localStorage.getItem('savedApplicationID'));
    }
    console.log(this.serviceManagementModelDialog);
    this.serviceManagementService.storeAndupdateServiceManagementDetails(this.serviceManagementModelDialog).subscribe((data: any) => {
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