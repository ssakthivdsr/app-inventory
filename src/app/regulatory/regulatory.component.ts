import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-regulatory',
  templateUrl: './regulatory.component.html',
  styleUrls: ['./regulatory.component.css']
})

export class RegulatoryComponent implements OnInit {

  public constructor(private titleService: Title, private _snackBar: MatSnackBar, private router: Router, private dialog: MatDialog) {
    this.titleService.setTitle("Inventory - Regulatory Details");
  }

  SOC: boolean = false;
  PCI: boolean = false;
  FFIEC: boolean = false;
  SBL: boolean = false;
  GLBA: boolean = false;
  PIPEDA: boolean = false;
  HIPAA: boolean = false;
  COPPA: boolean = false;
  USPA: boolean = false;
  USEL: boolean = false;

  check() {
    if (this.SOC || this.PCI || this.FFIEC || this.SBL || this.GLBA ||
      this.PIPEDA || this.HIPAA || this.COPPA || this.USPA || this.USEL)
      return false;
    else
      return true;
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
    //console.log("saved");
    this.openSnackBar();
  }

  cancel() {
    this.router.navigate(['/landingPage']);
  }

  ngOnInit(): void {
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