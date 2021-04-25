import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-add-dept-details',
  templateUrl: './add-dept-details.component.html',
  styleUrls: ['./add-dept-details.component.css']
})

export class AddDeptDetailsComponent implements OnInit {

  public addDepFormGroup: FormGroup;

  DepartmentName: string = '';
  DepartmentOwner: string = '';

  constructor(private _snackBar: MatSnackBar, private router: Router) {
    this.addDepFormGroup = new FormGroup({});
  }

  ngOnInit() {
    this.addDepFormGroup = new FormGroup({
      DpName: new FormControl('', [Validators.required]),
      DpOwner: new FormControl('', [Validators.required])
    });
  }

  save() {
    //console.log("Saved");
    this.openSnackBar();
  }

  openSnackBar() {
    this._snackBar.open("Details are saved successfully", "Dismiss", {
      duration: 2000,
      verticalPosition: "top"
    });
  }

  public checkError = (controlName: string, errorName: string) => {
    return this.addDepFormGroup.controls[controlName].hasError(errorName);
  }

  cancel() {
    this.router.navigate(['/landingPage']);
  }
}