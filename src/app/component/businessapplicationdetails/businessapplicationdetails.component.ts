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

  save(model: businessapplication) {
      // call API to save
      // ...
      console.log(model);
  }
}