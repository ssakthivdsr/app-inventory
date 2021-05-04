import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { UserService } from '../../../service/user.service';
import { Department } from '../../../model/department.model';

@Component({
  selector: 'app-add-application-details',
  templateUrl: './add-application-details.component.html',
  styleUrls: ['./add-application-details.component.css']
})

export class AddApplicationDetailsComponent implements OnInit {
  [x: string]: any;
  departmentsRetrieved: Department[] = [];
  public constructor(private _snackBar: MatSnackBar, private router: Router, private dialog: MatDialog, private userService: UserService) {
    this.addAppFormGroup = new FormGroup({});
  }

  selectedLob: string | undefined;
  selectedFunctionality: any;
  functionalities: any = [];
  lobDropdown = [
    { value: 'Auto and Fire Insurance', viewValue: 'Auto and Fire Insurance', functionalities: ['Marketing', 'Sales and Distribution', 'Product management', 'Underwritting', 'Policy Acquisition & Servicing', 'Claims Management', 'Finance and Accounts', 'Reinsurance'] },
    { value: 'Banking', viewValue: 'Banking', functionalities: ['Accounts', 'Loan', 'Mortgages', 'Payments', 'Fraud', 'Risk & Compliance', 'OutSourcing', 'Wealth & Retirement'] }
  ];

  onSelect(event: any) {
    console.log(event.value.functionalities);
    this.functionalities = event.value.functionalities;

  }


  lineOfBusiness: string[] = ['Fire', 'Life', 'Auto'];
  public addAppFormGroup: FormGroup;

  NameOfTheComponentManager: string = '';
  SMEProvidedByManagers: string = '';
  NameOfThePrimaryTechSME: string = '';
  NameOfPrimaryBA: string = '';

  ngOnInit(): void {
    this.addAppFormGroup = new FormGroup({
      AppName: new FormControl('', [Validators.required]),
      AppDesc: new FormControl('', [Validators.required]),
      AppLob: new FormControl('', [Validators.required]),
      AppFun: new FormControl('', [Validators.required])
    });
    this.retrieveAllDepartmentDetails();
  }
  retrieveAllDepartmentDetails() {
    this.userService.retrieveAllDepartmentDetails().subscribe((data: Department[]) => {
      console.log(data);
      this.departmentsRetrieved = data;
      console.log("retrieved value:" + this.departmentsRetrieved);
      console.log(JSON.stringify(this.departmentsRetrieved));
    })
  }

  check() {
    if (this.NameOfTheComponentManager === '' || this.SMEProvidedByManagers === '' ||
      this.NameOfThePrimaryTechSME === '' || this.NameOfPrimaryBA === '')
      return true;
    else
      return false;
  }

  openDialog() {
    this.dialog.open(ApplicationDetailsDialog);
  }

  openSnackBar() {
    this._snackBar.open("Details are saved successfully", "Dismiss", {
      duration: 2000,
      verticalPosition: "top"
    });
  }

  save() {
    //console.log("Saved");
    this.openSnackBar();
  }

  cancel() {
    this.router.navigate(['/landingPage']);
  }

  public checkError = (controlName: string, errorName: string) => {
    return this.addAppFormGroup.controls[controlName].hasError(errorName);
  }
}

@Component({
  selector: 'application-details-save-warning-dialog',
  templateUrl: 'application-details-save-warning-dialog.html',
})

export class ApplicationDetailsDialog {

  constructor(public dialogRef: MatDialogRef<ApplicationDetailsDialog>, public dialog: MatDialog, private _snackBar: MatSnackBar) { }

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
