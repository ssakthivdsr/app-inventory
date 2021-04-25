import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-businesspartner',
  templateUrl: './businesspartner.component.html',
  styleUrls: ['./businesspartner.component.css']
})
export class BusinesspartnerComponent implements OnInit {

  public addBusFormGroup: FormGroup;

  public constructor(private titleService: Title, private _snackBar: MatSnackBar, private dialog: MatDialog, private router: Router) {
    this.titleService.setTitle("Inventory - Business Partner Details");
    this.addBusFormGroup = new FormGroup({});
  }

  SecondaryBusinessPartner: string = '';
  BusinessPartnerManagerNames: string = '';
  BusinessPartnerDirectorNames: string = '';

  check() {
    if (this.SecondaryBusinessPartner === '' || this.BusinessPartnerManagerNames === '' ||
      this.BusinessPartnerDirectorNames === '')
      return true;
    else
      return false;
  }

  ngOnInit(): void {
    this.addBusFormGroup = new FormGroup({
      BusPart: new FormControl('', [Validators.required])
    });
  }

  openDialog() {
    this.dialog.open(DialogElementsExampleDialog);
  }

  save() {
    //console.log("Saved");
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