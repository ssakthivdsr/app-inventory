import { Component, Inject, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ApplicationLifecycle } from 'src/app/model/applicationlifecycle.model';
import { ApplicationLifecycleRetrieve } from 'src/app/model/applicationlifecycleretrieve.model';
import { ApplicationLifecycleService } from 'src/app/service/applicationlifecycle.service';

@Component({
  selector: 'app-edit-applicationlifecycle',
  templateUrl: './edit-applicationlifecycle.component.html',
  styleUrls: ['./edit-applicationlifecycle.component.css']
})
export class EditApplicationlifecycleComponent implements OnInit {
  existingApplicationId: number = 0;
  public applicationlifecycleModel = new ApplicationLifecycle();
  public applicationlifecycleRetrieve: ApplicationLifecycleRetrieve[] = [];
  checkId: number;
  id: number;
  dataId: number;

  public constructor(private titleService: Title, private dialog: MatDialog, private _snackBar: MatSnackBar, private router: Router, private applicationlifecycleservice: ApplicationLifecycleService) {
    this.titleService.setTitle("Inventory - Application Lifecycle Details");

    for (this.id = 0; this.id <= 13; this.id++) {
      this.applicationlifecycleRetrieve[this.id] = new ApplicationLifecycleRetrieve();
      this.applicationlifecycleRetrieve[this.id].questionId = this.id + 1;
    }

  }

  ngOnInit(): void {

    this.existingApplicationId = Number(localStorage.getItem('applicationID'));
    if (this.existingApplicationId != 0) {

      this.applicationlifecycleservice.retrieveApplicationLifecycleByApplicationId(this.existingApplicationId).subscribe((data: ApplicationLifecycleRetrieve[]) => {
        this.dataId = 0;

        for (this.id = 0; this.id <= 13; this.id++) {
          if (data[this.dataId].questionId == this.id + 1) {
            this.applicationlifecycleRetrieve[this.id] = data[this.dataId];
            this.dataId++;
          }
          else {
            this.applicationlifecycleRetrieve[this.id].answer = '';
          }
        }
      })
    }

  }


  check() {
    for (this.id = 0; this.id <= 13; this.id++) {
      if (this.applicationlifecycleRetrieve[this.id].answer === '')
        return true;
    }
    return false;
  }

  openDialog() {
    this.dialog.open(EditApplicationLifecycleDialog, { data: this.applicationlifecycleRetrieve });
  }

  openSnackBar() {
    this._snackBar.open("Details are updated successfully", "Dismiss", {
      duration: 2000,
      verticalPosition: "top"
    });
  }

  update() {

    // this.applicationlifecycleModel.applicationId = Number(localStorage.getItem('savedApplicationID'));

    // console.log("applicationlifecycleTO: " + this.applicationlifecycleModel)
    this.applicationlifecycleservice.storeApplicationLifecycleDetails(this.applicationlifecycleModel).subscribe((data: any) => {
    })

    // console.log(this.applicationlifecycleModel);
    this.openSnackBar();

  }

  cancel() {

    localStorage.clear();
    this.router.navigate(['/landingPage']);
  }
}

@Component({
  selector: 'edit-application-lifecycle-dialog',
  templateUrl: 'edit-application-lifecycle-dialog.html',
})

export class EditApplicationLifecycleDialog {

  public applicationlifecycleModel = new ApplicationLifecycle();

  constructor(public dialogRef: MatDialogRef<EditApplicationLifecycleDialog>, public dialog: MatDialog, private _snackBar: MatSnackBar, private applicationlifecycleservice: ApplicationLifecycleService, @Inject(MAT_DIALOG_DATA) public data: any) {
    this.applicationlifecycleModel = data;
  }

  update() {

    // this.applicationlifecycleModel.applicationId = Number(localStorage.getItem('savedApplicationID'));

    this.applicationlifecycleservice.storeApplicationLifecycleDetails(this.applicationlifecycleModel).subscribe((data: any) => {
    })
    // console.log(this.applicationlifecycleModel);

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







