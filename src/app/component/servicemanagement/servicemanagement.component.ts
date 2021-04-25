import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Validators, FormGroup, FormControl, FormBuilder } from "@angular/forms";

@Component({
  selector: 'app-servicemanagement',
  templateUrl: './servicemanagement.component.html',
  styleUrls: ['./servicemanagement.component.css']
})

export class ServicemanagementComponent implements OnInit {
  myForm: FormGroup;
  ValidNumberIndicator = true;
  constructor(private fb: FormBuilder, private router: Router, private _snackBar: MatSnackBar, private dialog: MatDialog) {
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
  
  v1: string = '';
  v2: string = '';
  v3: string = '';
  v4: string = '';
  v5: string = '';
  v6: string = '';
  v7: string = '';
  v8: string = '';
  v9: string = '';
  v10: string = '';
  v11: string = '';
  v12: string = '';
  v13: string = '';
  v14: string = '';
  v15: string = '';
  v16: string = '';
  v17: string = '';
  v18: string = '';
  v19: string = '';
  v20: string = '';
  v21: string = '';
  v22: string = '';
  v23: string = '';
  v24: string = '';
  v25: string = '';
  v26: string = '';
  v27: string = '';
  v28: string = '';
  v29: string = '';
  v30: string = '';
  v31: string = '';
  v32: string = '';
  v33: string = '';
  v34: string = '';
  v35: string = '';
  v36: string = '';
  v37: string = '';
  v38: string = '';
  v39: string = '';

  check() {
    if (this.v1 === '' || this.v2 === '' || this.v3 === '' || this.v4 === '' ||
      this.v5 === '' || this.v6 === '' || this.v7 === '' || this.v8 === '' ||
      this.v9 === '' || this.v10 === '' || this.v11 === '' || this.v12 === '' ||
      this.v13 === '' || this.v14 === '' || this.v15 === '' || this.v16 === '' ||
      this.v17 === '' || this.v18 === '' || this.v19 === '' || this.v20 === '' ||
      this.v21 === '' || this.v22 === '' || this.v23 === '' || this.v24 === '' ||
      this.v25 === '' || this.v26 === '' || this.v27 === '' || this.v28 === '' ||
      this.v29 === '' || this.v30 === '' || this.v31 === '' || this.v32 === '' ||
      this.v33 === '' || this.v34 === '' || this.v35 === '' || this.v36 === '' ||
      this.v37 === '' || this.v38 === '' || this.v39 === '')
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
    //console.log("saved");
    this.openSnackBar();
  }

  cancel() {
    this.router.navigate(['/landingPage']);
  }

  ngOnInit(): void {
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