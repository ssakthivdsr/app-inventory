import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-application-details',
  templateUrl: './add-application-details.component.html',
  styleUrls: ['./add-application-details.component.css']
})
export class AddApplicationDetailsComponent implements OnInit {
  lineOfBusiness: string[] = ['Fire', 'Life', 'Auto'];
  public addAppFormGroup: FormGroup;


  constructor() {
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


  public checkError = (controlName: string, errorName: string) => {
    return this.addAppFormGroup.controls[controlName].hasError(errorName);
  }

}