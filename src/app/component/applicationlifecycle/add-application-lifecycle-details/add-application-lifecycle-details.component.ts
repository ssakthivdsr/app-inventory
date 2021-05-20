import { Component, Inject, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ApplicationLifecycle } from 'src/app/model/applicationlifecycle.model';
import { ApplicationLifecycleService } from 'src/app/service/applicationlifecycle.service';

@Component({
  selector: 'app-add-application-lifecycle-details',
  templateUrl: './add-application-lifecycle-details.component.html',
  styleUrls: ['./add-application-lifecycle-details.component.css']
})

export class AddApplicationLifecycleDetailsComponent implements OnInit {

  public applicationlifecycleModel = new ApplicationLifecycle();
  checkId: number;

  public constructor(private titleService: Title, private dialog: MatDialog, private _snackBar: MatSnackBar, private router: Router, private applicationlifecycleservice: ApplicationLifecycleService) {
    this.titleService.setTitle("Inventory - Application Lifecycle Details");
  }

  check() {
    for (this.checkId = 0; this.checkId <= 13; this.checkId++) {
      if (this.applicationlifecycleModel.questionAnswer[this.checkId].answer === '')
        return true;
    }
    return false;
  }

  openDialog() {
    this.dialog.open(ApplicationLifecycleDialog, { data: this.applicationlifecycleModel });
  }

  openSnackBar() {
    this._snackBar.open("Details are saved successfully", "Dismiss", {
      duration: 2000,
      verticalPosition: "top"
    });
  }

  save() {

    this.applicationlifecycleModel.applicationId = Number(localStorage.getItem('savedApplicationID'));

    console.log("applicationlifecycleTO: " + this.applicationlifecycleModel)
    this.applicationlifecycleservice.storeApplicationLifecycleDetails(this.applicationlifecycleModel).subscribe((data: any) => {
    })

    console.log(this.applicationlifecycleModel);
    this.openSnackBar();

  }

  cancel() {

    localStorage.clear();
    this.router.navigate(['/landingPage']);
  }

  ngOnInit(): void {
  }
}

@Component({
  selector: 'application-lifecycle-dialog',
  templateUrl: 'application-lifecycle-dialog.html',
})

export class ApplicationLifecycleDialog {

  public applicationlifecycleModel = new ApplicationLifecycle();

  constructor(public dialogRef: MatDialogRef<ApplicationLifecycleDialog>, public dialog: MatDialog, private _snackBar: MatSnackBar, private applicationlifecycleservice: ApplicationLifecycleService, @Inject(MAT_DIALOG_DATA) public data: any) {
    this.applicationlifecycleModel = data;
  }

  save() {

    this.applicationlifecycleModel.applicationId = Number(localStorage.getItem('savedApplicationID'));

    this.applicationlifecycleservice.storeApplicationLifecycleDetails(this.applicationlifecycleModel).subscribe((data: any) => {
    })
    console.log(this.applicationlifecycleModel);

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