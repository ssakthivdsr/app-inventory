import { ChangeDetectorRef, Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UserService } from '../../service/user.service';
import { Department } from '../../model/department.model';
import { ApplicationDetails } from '../../model/application-details.model';
import { ApplicationService } from 'src/app/service/application.service';

@Component({
  selector: 'app-edit-application-details',
  templateUrl: './edit-application-details.component.html',
  styleUrls: ['./edit-application-details.component.css']
})
export class EditApplicationDetailsComponent implements OnInit {
  i: number;
  existingApplicationId: number = 0;
  departmentRetrieved = new Department();
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
    this.existingApplicationId = Number(localStorage.getItem('applicationID'));
    console.log(this.existingApplicationId);
    if (this.existingApplicationId != 0) {
      this.applicationService.retrieveApplicationById(this.existingApplicationId).subscribe((data: ApplicationDetails) => {
        this.applicationModel = data;
        this.retrieveDepartmentById(this.applicationModel.departmentId);
        console.log(this.applicationModel.departmentId);
        //console.log(this.applicationModel.departmentName);
        console.log(this.applicationModel.lineOfBusiness);
        console.log(this.applicationModel.functionality);
        this.addAppFormGroup.setValue({
          AppName: this.applicationModel.applicationName,
          AppDesc: this.applicationModel.applicationDescription,
          AppDept: this.applicationModel.departmentName,
          AppLob: this.applicationModel.lineOfBusiness,
          AppFun: this.applicationModel.functionality
        });
        //this.addAppFormGroup.get("AppDept")?.setValue(this.applicationModel.departmentName);
        //console.log("retrieved value:" + this.departmentsRetrieved);
        //console.log(JSON.stringify(this.departmentsRetrieved));
      })
    }
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

  retrieveDepartmentById(id: number) {
    this.userService.retrieveDepartmentById(id).subscribe((data: Department) => {
      //console.log(data);
      this.departmentRetrieved = data;
      //this.applicationModel.departmentName = this.departmentRetrieved.departmentName;
      //console.log("retrieved value:" + this.departmentsRetrieved);
      //console.log(JSON.stringify(this.departmentsRetrieved));
    })

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
    if (this.applicationModel.nameOfTheComponentManager === '' || this.applicationModel.smeProvidedByManagers === '' ||
      this.applicationModel.nameOfPrimaryTechSME === '' || this.applicationModel.nameOfPrimaryBA === '')
      return true;
    else
      return false;
  }

  openDialog() {
    this.dialog.open(EditApplicationDetailsDialog, {
      data: this.applicationModel
    });
  }

  openSnackBar() {
    this._snackBar.open("Details are updated successfully", "Dismiss", {
      duration: 2000,
      verticalPosition: "top"
    });
  }

  update() {
    // console.log("updated");
    // this.applicationService.storeApplicationDetails(this.applicationModel).subscribe((data: any) => {
    //   console.log(data);
    // })
    this.openSnackBar();
  }

  cancel() {
    localStorage.clear();
    this.router.navigate(['/landingPage']);
  }

  public checkError = (controlName: string, errorName: string) => {
    return this.addAppFormGroup.controls[controlName].hasError(errorName);
  }
}

@Component({
  selector: 'edit-application-details-save-warning-dialog',
  templateUrl: 'edit-application-details-save-warning-dialog.html',
})

export class EditApplicationDetailsDialog {
  applicationModelDialog = new ApplicationDetails();

  constructor(public dialogRef: MatDialogRef<EditApplicationDetailsDialog>, public dialog: MatDialog, private _snackBar: MatSnackBar, private applicationService: ApplicationService, @Inject(MAT_DIALOG_DATA) public data: any) {
    this.applicationModelDialog = data;
  }

  update() {
    // console.log("updated");
    // this.applicationService.storeApplicationDetails(this.applicationModelDialog).subscribe((data: any) => {
    //   console.log(data);
    // })
    this.openSnackBar();
  }

  openSnackBar() {
    this._snackBar.open("Details are updated successfully", "Dismiss", {
      duration: 2000,
      verticalPosition: "top"
    });
  }

  clickMethod() {
    this.update();
    this.dialogRef.close();
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}

