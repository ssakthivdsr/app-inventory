import { Component, OnInit, ChangeDetectorRef, Inject } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Validators, FormGroup, FormControl, FormBuilder } from "@angular/forms";

import { ServiceManagementService } from 'src/app/service/servicemanagement.service';
import { ServiceManagement } from '../../model/servicemanagement.model';

@Component({
  selector: 'app-edit-service-management-details',
  templateUrl: './edit-service-management-details.component.html',
  styleUrls: ['./edit-service-management-details.component.css']
})

export class EditServiceManagementDetailsComponent implements OnInit {
  retrieveId: number;
  i: number;
  existingApplicationId: number = 0;
  myForm: FormGroup;
  ValidNumberIndicator = true;
  serviceManagementsRetrieved: ServiceManagement[] = [];
  checkId: number;
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



  ngOnInit(): void {

    for (this.i = 0; this.i < 47; this.i++) {
      this.serviceManagementsRetrieved[this.i] = { serviceManagementId: 1, applicationId: this.existingApplicationId, questionId: this.i + 1, answer: '' };
    }
    this.existingApplicationId = Number(localStorage.getItem('applicationID'));
    if (this.existingApplicationId !== 0) {
      this.serviceManagementService.retrieveServiceManagementByApplicationId(this.existingApplicationId).subscribe((data: ServiceManagement[]) => {
        if (data.length == 0) {
          for (this.i = 0; this.i < 47; this.i++) {
            this.serviceManagementsRetrieved[this.i] = { serviceManagementId: 1, applicationId: this.existingApplicationId, questionId: this.i + 1, answer: '' };
          }
        } else {
          this.serviceManagementsRetrieved = data;
        }
      })
    }
  }


  check() {
    for (this.checkId = 0; this.checkId < 47; this.checkId++) {
      if (this.serviceManagementsRetrieved[this.checkId].answer === '')
        return true;
    }
    return false;
  }

  openDialog() {
    this.dialog.open(EditServiceManagementWarningDialog, {
      data: this.serviceManagementsRetrieved
    });
  }

  openSnackBar() {
    this._snackBar.open("Details are saved successfully", "Dismiss", {
      duration: 2000,
      verticalPosition: "top"
    });
  }

  update() {
    this.serviceManagementService.storeAndupdateServiceManagementDetails(this.serviceManagementsRetrieved).subscribe((data: any) => {

    })

    this.openSnackBar();
  }

  cancel() {
    localStorage.clear();
    this.router.navigate(['/landingPage']);
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
  selector: 'edit-service-management-warning-dialog',
  templateUrl: 'edit-service-management-warning-dialog.html',
})

export class EditServiceManagementWarningDialog {

  serviceManagementModelDialog: ServiceManagement[] = [];

  constructor(public dialogRef: MatDialogRef<EditServiceManagementWarningDialog>, public dialog: MatDialog, private _snackBar: MatSnackBar, private serviceManagementService: ServiceManagementService,
    private changeDetectorRefs: ChangeDetectorRef, @Inject(MAT_DIALOG_DATA) public data: any) {
    this.serviceManagementModelDialog = data;
  }

  update() {
    this.serviceManagementService.storeAndupdateServiceManagementDetails(this.serviceManagementModelDialog).subscribe((data: any) => {
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
    this.update();
    this.dialogRef.close();
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}