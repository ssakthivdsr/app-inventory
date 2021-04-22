import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-add-application-details',
  templateUrl: './add-application-details.component.html',
  styleUrls: ['./add-application-details.component.css']
})
export class AddApplicationDetailsComponent implements OnInit {
  lineOfBusiness: string[] = ['Fire', 'Life', 'Auto'];
  public addAppFormGroup: FormGroup;


  constructor(private _snackBar: MatSnackBar) {
    this.addAppFormGroup = new FormGroup({});
  }

  ngOnInit(): void {
    this.addAppFormGroup = new FormGroup({
      AppName: new FormControl('', [Validators.required]),
      AppDesc: new FormControl('', [Validators.required]),
      AppLob: new FormControl('', [Validators.required]),
      AppFun: new FormControl('', [Validators.required])

    });
  }
  save() {

    console.log("Saved");

  }

  openSnackBar(message: string) {

    this._snackBar.open(message, "dismiss", {

      duration: 2000,

      verticalPosition: "top"

    });



    this.save();

  }

  public checkError = (controlName: string, errorName: string) => {
    return this.addAppFormGroup.controls[controlName].hasError(errorName);
  }

}