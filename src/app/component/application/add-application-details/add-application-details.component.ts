import { ChangeDetectorRef, Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UserService } from '../../../service/user.service';
import { Department } from '../../../model/department.model';
import { ApplicationDetails } from '../../../model/application-details.model';
import { ApplicationService } from 'src/app/service/application.service';

@Component({
  selector: 'app-add-application-details',
  templateUrl: './add-application-details.component.html',
  styleUrls: ['./add-application-details.component.css']
})

export class AddApplicationDetailsComponent implements OnInit {
  departmentsRetrieved: Department[] = [];
  public applicationModel = new ApplicationDetails();
  applicationsRetrieved: ApplicationDetails[] = [];
  selectedDepartment = new Department();
  selectedLob: string = '';
  selectedFunctionality: string = '';
  functionalities: string[] = [];
  lobDropdown = [
    { value: 'Auto and Fire Insurance', viewValue: 'Auto and Fire Insurance', functionalities: ['Marketing', 'Sales and Distribution', 'Product management', 'Underwritting', 'Policy Acquisition & Servicing', 'Claims Management', 'Finance and Accounts', 'Reinsurance'] },
    { value: 'Banking', viewValue: 'Banking', functionalities: ['Accounts', 'Loan', 'Mortgages', 'Payments', 'Fraud', 'Risk & Compliance', 'OutSourcing', 'Wealth & Retirement'] }
  ];
  lineOfBusiness: string[] = ['Fire', 'Life', 'Auto'];
  public addAppFormGroup: FormGroup;

  public constructor(private _snackBar: MatSnackBar, private router: Router, private dialog: MatDialog,
    private userService: UserService, private applicationService: ApplicationService, private changeDetectorRefs: ChangeDetectorRef) {
    this.addAppFormGroup = new FormGroup({});
  }

  ngOnInit(): void {
    this.addAppFormGroup = new FormGroup({
      AppName: new FormControl('', [Validators.required]),
      AppDesc: new FormControl('', [Validators.required]),
      AppDept: new FormControl('', [Validators.required]),
      AppLob: new FormControl('', [Validators.required]),
      AppFun: new FormControl('', [Validators.required])
    });

    this.retrieveAllDepartmentDetails();
  }

  onSelectDept(event: any) {
    //console.log(event.value.selectedDepartment);
    //this.functionalities = event.value.functionalities;
  }

  onSelectLob(event: any) {
    //console.log(event.value.functionalities);
    //console.log(this.selectedLob);
    this.functionalities = event.value.functionalities;
  }

  retrieveAllDepartmentDetails() {
    this.userService.retrieveAllDepartmentDetails().subscribe((data: Department[]) => {
      //console.log(data);
      this.departmentsRetrieved = data;
      //console.log("retrieved value:" + this.departmentsRetrieved);
      //console.log(JSON.stringify(this.departmentsRetrieved));
    })
  }

  check() {
    this.applicationModel.applicationName = this.addAppFormGroup.get('AppName')!.value;
    this.applicationModel.applicationDescription = this.addAppFormGroup.get('AppDesc')!.value;
    this.selectedDepartment = this.addAppFormGroup.get('AppDept')!.value;
    this.applicationModel.departmentId = this.selectedDepartment.departmentId;
    this.applicationModel.lineOfBusiness = this.addAppFormGroup.get('AppLob')!.value.viewValue;
    this.applicationModel.functionality = this.addAppFormGroup.get('AppFun')!.value;

    if (this.applicationModel.nameOfTheComponentManager === '' || this.applicationModel.smeProvidedByManagers === '' ||
      this.applicationModel.nameOfPrimaryTechSME === '' || this.applicationModel.nameOfPrimaryBA === '')
      return true;
    else
      return false;
  }

  openDialog() {
    this.dialog.open(ApplicationDetailsDialog, {
      data: this.applicationModel
    });
  }

  openSnackBar() {
    this._snackBar.open("Details are saved successfully", "Dismiss", {
      duration: 2000,
      verticalPosition: "top"
    });
  }

  save() {
    //console.log("Saved");
    this.applicationService.storeApplicationDetails(this.applicationModel).subscribe((data: any) => {
      //console.log(data);
    })
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
  applicationModelDialog = new ApplicationDetails();

  constructor(public dialogRef: MatDialogRef<ApplicationDetailsDialog>, public dialog: MatDialog, private _snackBar: MatSnackBar, private applicationService: ApplicationService, @Inject(MAT_DIALOG_DATA) public data: any) {
    this.applicationModelDialog = data;
  }

  save() {
    //console.log("saved");
    this.applicationService.storeApplicationDetails(this.applicationModelDialog).subscribe((data: any) => {
      //console.log(data);
    })
    //this.addAppFormGroup.reset();
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
