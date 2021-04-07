import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormArray, FormBuilder } from '@angular/forms';
import {businessapplication } from './businessapplication.interface';

@Component({
  selector: 'app-businessapplicationdetails',
  templateUrl: './businessapplicationdetails.component.html',
  styleUrls: ['./businessapplicationdetails.component.css']
})
export class BusinessapplicationdetailsComponent implements OnInit {
  public myForm: any = null;
  checked = false;
  indeterminate = false;

  constructor(private _fb: FormBuilder) { }

  ngOnInit() {
      this.myForm = this._fb.group({
          name: ['', [Validators.required, Validators.minLength(5)]],
          addresses: this._fb.array([
              this.initAddress(),
          ]),
          users: this._fb.array([
            this.initUsers(),
        ])
      });
  }

  initAddress() {
      return this._fb.group({
          street: ['', Validators.required],
          postcode: ['']
      });
  }

  addAddress() {
      const control = <FormArray>this.myForm.controls['addresses'];
      control.push(this.initAddress());
  }

  removeAddress(i: number) {
      const control = <FormArray>this.myForm.controls['addresses'];
      control.removeAt(i);
  }

  initUsers() {
    return this._fb.group({
        street: ['', Validators.required],
        postcode: ['']
    });
}

addUsers() {
    const control = <FormArray>this.myForm.controls['users'];
    control.push(this.initAddress());
}

removeUsers(i: number) {
    const control = <FormArray>this.myForm.controls['users'];
    control.removeAt(i);
}

  save(model: businessapplication) {
      // call API to save
      // ...
      console.log(model);
  }
}