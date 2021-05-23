import { Component, OnInit, ChangeDetectorRef, Inject } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Validators, FormGroup, FormControl, FormBuilder } from "@angular/forms";
import { ServiceManagement } from 'src/app/model/servicemanagement.model';
import { ServiceManagementService } from 'src/app/service/servicemanagement.service';
import { ServiceManagementRetrieve } from '../../model/servicemanagementretrieve.model';

@Component({
  selector: 'app-edit-service-management-details',
  templateUrl: './edit-service-management-details.component.html',
  styleUrls: ['./edit-service-management-details.component.css']
})

export class EditServiceManagementDetailsComponent implements OnInit {
  retrieveId: number;
  dataId: number;
  existingApplicationId: number = 0;
  myForm: FormGroup;
  ValidNumberIndicator = true;
  serviceManagementModel = new ServiceManagement();
  serviceManagementsRetrieved: ServiceManagementRetrieve[] = [];
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
    for (this.retrieveId = 0; this.retrieveId < 47; this.retrieveId++) {
      this.serviceManagementsRetrieved[this.retrieveId] = new ServiceManagementRetrieve();
      this.serviceManagementsRetrieved[this.retrieveId].questionId = this.retrieveId + 1;
    }
  }



  ngOnInit(): void {

    this.existingApplicationId = Number(localStorage.getItem('applicationID'));
    if (this.existingApplicationId !== 0) {
      this.serviceManagementService.retrieveServiceManagementByApplicationId(this.existingApplicationId).subscribe((data: ServiceManagementRetrieve[]) => {
        this.dataId = 0;
        for (this.retrieveId = 0; this.retrieveId < 47; this.retrieveId++) {
          if (data[this.dataId].questionId === this.retrieveId + 1) {
            this.serviceManagementsRetrieved[this.retrieveId] = data[this.dataId];
            this.dataId++;
          }
          else {
            this.serviceManagementsRetrieved[this.retrieveId].answer = '';
          }
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
      data: this.serviceManagementModel
    });
  }

  openSnackBar() {
    this._snackBar.open("Details are saved successfully", "Dismiss", {
      duration: 2000,
      verticalPosition: "top"
    });
  }

  update() {
    this.serviceManagementService.storeServiceManagementDetails(this.serviceManagementModel).subscribe((data: any) => {
      //console.log(data);
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

  serviceManagementModelDialog = new ServiceManagement();

  constructor(public dialogRef: MatDialogRef<EditServiceManagementWarningDialog>, public dialog: MatDialog, private _snackBar: MatSnackBar, private serviceManagementService: ServiceManagementService,
    private changeDetectorRefs: ChangeDetectorRef, @Inject(MAT_DIALOG_DATA) public data: any) {
    this.serviceManagementModelDialog = data;
  }

  update() {
    this.serviceManagementService.storeServiceManagementDetails(this.serviceManagementModelDialog).subscribe((data: any) => {
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
    this.update();
    this.dialogRef.close();
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}