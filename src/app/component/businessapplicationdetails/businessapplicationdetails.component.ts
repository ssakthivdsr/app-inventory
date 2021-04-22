import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormArray, FormBuilder, FormControl } from '@angular/forms';
import { businessapplication } from './businessapplication.interface';

@Component({
    selector: 'app-businessapplicationdetails',
    templateUrl: './businessapplicationdetails.component.html',
    styleUrls: ['./businessapplicationdetails.component.css']
})
export class BusinessapplicationdetailsComponent implements OnInit {
    public myForm: any = null;
    checked = false;
    indeterminate = false;
    ValidNumberIndicator = true;

    constructor(private _fb: FormBuilder) { }

    ngOnInit() {
        this.myForm = this._fb.group({
            name: ['', [Validators.required, Validators.minLength(5)]],
            f: new FormControl("", [Validators.pattern(/\d/)]),
            addresses: this._fb.array([
                this.initAddress(),
            ]),
            users: this._fb.array([
                this.initUsers(),
            ]),
            channels: this._fb.array([
                this.initChannels(),
            ]),
            products: this._fb.array([
                this.initProducts(),
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
        control.push(this.initUsers());
    }

    removeUsers(i: number) {
        const control = <FormArray>this.myForm.controls['users'];
        control.removeAt(i);
    }

    initChannels() {
        return this._fb.group({
            street: ['', Validators.required],
            postcode: ['']
        });
    }

    addChannels() {
        const control = <FormArray>this.myForm.controls['channels'];
        control.push(this.initChannels());
    }

    removeChannels(i: number) {
        const control = <FormArray>this.myForm.controls['channels'];
        control.removeAt(i);
    }

    initProducts() {
        return this._fb.group({
            street: ['', Validators.required],
            postcode: ['']
        });
    }

    addProducts() {
        const control = <FormArray>this.myForm.controls['products'];
        control.push(this.initProducts());
    }

    removeProducts(i: number) {
        const control = <FormArray>this.myForm.controls['products'];
        control.removeAt(i);
    }

    save(model: businessapplication) {
        // call API to save
        // ...
        console.log(model);
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