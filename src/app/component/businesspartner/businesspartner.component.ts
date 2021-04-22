import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-businesspartner',
  templateUrl: './businesspartner.component.html',
  styleUrls: ['./businesspartner.component.css']
})
export class BusinesspartnerComponent implements OnInit {

  public addBusFormGroup: FormGroup;



  public constructor(private titleService: Title) {
    this.titleService.setTitle("Inventory - Business Partner Details");
    this.addBusFormGroup = new FormGroup({});
  }

  ngOnInit(): void {
    this.addBusFormGroup = new FormGroup({
      BusPart: new FormControl('', [Validators.required])


    });
  }


  public checkError = (controlName: string, errorName: string) => {
    return this.addBusFormGroup.controls[controlName].hasError(errorName);
  }



}