import { Component, Inject, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-add-application-lifecycle-details',
  templateUrl: './add-application-lifecycle-details.component.html',
  styleUrls: ['./add-application-lifecycle-details.component.css']
})
export class AddApplicationLifecycleDetailsComponent implements OnInit {


  public constructor(private titleService: Title, private dialog: MatDialog, private formBuilder: FormBuilder) {
    this.titleService.setTitle("Inventory - Application Lifecycle Details");
  }

  message: string = "Some fields are not yet filled.";
  action: string = "Dismiss";
  count: boolean = true;
  isEmpty: boolean = true;

  ApplicationLifecycle: string = '';
  SitesApplicationsRunIn: string = '';
  PrimaryHardwareOS: string = '';
  PrimaryDevelopmentLanguage: string = '';
  SecondaryDevelopmentLanguage: string = '';
  PrimaryDatabaseTechnology: string = '';
  PartIsWebBased: string = '';
  FrequencyOfApplication: string = '';
  SizeOfChange: string = '';
  ApplicationTool: string = '';
  UniqueSkills: string = '';
  ReportingTool: string = '';
  TestEnvironmentReady: string = '';
  ApplicationSize: string = '';

  check() {
    if (this.ApplicationLifecycle === '' || this.SitesApplicationsRunIn === '' ||
      this.PrimaryHardwareOS === '' || this.PrimaryDevelopmentLanguage === '' ||
      this.SecondaryDevelopmentLanguage === '' || this.PrimaryDatabaseTechnology === '' ||
      this.PartIsWebBased === '' || this.FrequencyOfApplication === '' ||
      this.SizeOfChange === '' || this.ApplicationTool === '' ||
      this.UniqueSkills === '' || this.ReportingTool === '' ||
      this.TestEnvironmentReady === '' || this.ApplicationSize === '')
      return true;
    else
      return false;
  }

  openDialog() {
    this.dialog.open(DialogElementsExampleDialog);
    this.count = false;
  }


  save() {
    //console.log("saved");
  }


  ngOnInit(): void {


  };



}
@Component({
  selector: 'dialog-elements-example-dialog',
  templateUrl: 'dialog-elements-example-dialog.html',
})
export class DialogElementsExampleDialog {

  constructor(public dialogRef: MatDialogRef<DialogElementsExampleDialog>, public dialog: MatDialog, private _snackBar: MatSnackBar) { }

  save() {
    //console.log("saved");
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
    this.openSnackBar();

  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}

