import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-application-details',
  templateUrl: './add-application-details.component.html',
  styleUrls: ['./add-application-details.component.css']
})

export class AddApplicationDetailsComponent implements OnInit {

  public constructor(private _snackBar: MatSnackBar, private router: Router, private dialog: MatDialog) {
    this.addAppFormGroup = new FormGroup({});
  }

  lineOfBusiness: string[] = ['Fire', 'Life', 'Auto'];
  public addAppFormGroup: FormGroup;

  NameOfTheComponentManager: string = '';
  SMEProvidedByManagers: string = '';
  NameOfThePrimaryTechSME: string = '';
  NameOfPrimaryBA: string = '';

  ngOnInit(): void {
    this.addAppFormGroup = new FormGroup({
      AppName: new FormControl('', [Validators.required]),
      AppDesc: new FormControl('', [Validators.required]),
      AppLob: new FormControl('', [Validators.required]),
      AppFun: new FormControl('', [Validators.required])
    });
  }

  check() {
    if (this.NameOfTheComponentManager === '' || this.SMEProvidedByManagers === '' ||
      this.NameOfThePrimaryTechSME === '' || this.NameOfPrimaryBA === '')
      return true;
    else
      return false;
  }

  openDialog() {
    this.dialog.open(DialogElementsExampleDialog);
  }

  openSnackBar() {
    this._snackBar.open("Details are saved successfully", "Dismiss", {
      duration: 2000,
      verticalPosition: "top"
    });
  }

  save() {
    //console.log("Saved");
    this.openSnackBar();
  }

  cancel() {
    this.router.navigate(['/landingPage']);
  }

  public checkError = (controlName: string, errorName: string) => {
    return this.addAppFormGroup.controls[controlName].hasError(errorName);
  }
}

@Component({
  selector: 'dialog-elements-example-dialog',
  templateUrl: 'dialog-elements-example-dialog.html',
})

export class DialogElementsExampleDialog {

  constructor(public dialogRef: MatDialogRef<DialogElementsExampleDialog>, public dialog: MatDialog, private _snackBar: MatSnackBar) { }

  save() {
    //console.log("saved");
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