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
  selectedDepartment = new Department();
  selectedDepartmentID: number = 0;
  selectedLob: string = '';
  selectedFunctionality: string = '';
  functionalities: string[] = [];
  lineOfBusiness: string[] = ['Auto and Fire Insurance', 'Banking'];
  public addAppFormGroup: FormGroup;
  initialId: number = 0;
  passedId: number = 0;

  public constructor(private _snackBar: MatSnackBar, private router: Router, private dialog: MatDialog,
    private userService: UserService, private applicationService: ApplicationService, private changeDetectorRefs: ChangeDetectorRef) {
    this.addAppFormGroup = new FormGroup({});
    localStorage.setItem('savedApplicationID', 0 + '');
    this.initialId = Number(localStorage.getItem('savedApplicationID'));
    console.log(this.initialId);
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
    this.selectedDepartmentID = this.applicationModel.departmentId;
    this.selectedLob = this.applicationModel.lineOfBusiness;
    if (this.selectedLob === "Auto and Fire Insurance") {
      this.functionalities = ['Marketing', 'Sales and Distribution', 'Product management', 'Underwritting', 'Policy Acquisition & Servicing', 'Claims Management', 'Finance and Accounts', 'Reinsurance'];
    }
    if (this.selectedLob === "Banking") {
      this.functionalities = ['Accounts', 'Loan', 'Mortgages', 'Payments', 'Fraud', 'Risk & Compliance', 'OutSourcing', 'Wealth & Retirement'];
    }
    this.selectedFunctionality = this.applicationModel.functionality;
  }

  onSelectDept(event: any) {
    //console.log(event.value.selectedDepartment);
    //this.functionalities = event.value.functionalities;
  }

  onSelectLob(event: any) {
    if (event.value === "Auto and Fire Insurance") {
      this.functionalities = ['Marketing', 'Sales and Distribution', 'Product management', 'Underwritting', 'Policy Acquisition & Servicing', 'Claims Management', 'Finance and Accounts', 'Reinsurance']
    }
    if (event.value === "Banking") {
      this.functionalities = ['Accounts', 'Loan', 'Mortgages', 'Payments', 'Fraud', 'Risk & Compliance', 'OutSourcing', 'Wealth & Retirement'];
    }
  }

  retrieveAllDepartmentDetails() {
    this.userService.retrieveAllDepartmentDetails().subscribe((data: Department[]) => {
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
    this.applicationModel.departmentId = this.selectedDepartmentID;
    this.applicationModel.lineOfBusiness = this.selectedLob;
    this.applicationModel.functionality = this.selectedFunctionality;
    if (this.initialId == Number(localStorage.getItem('savedApplicationID'))) {
      this.passedId = 0;
    }
    else {
      this.passedId = 1;
    }
    this.dialog.open(ApplicationDetailsDialog, {
      data: { model: this.applicationModel, id: this.passedId }
    });
  }

  openSnackBar(id: number) {
    //this.retrieveAllApplicationDetails();
    this._snackBar.open("Details are saved successfully. \nYour saved ID is " + id + '.', "Dismiss", {
      duration: 5000,
      verticalPosition: "top"
    });
  }

  openUpdateSnackBar() {
    this._snackBar.open("Details are updated successfully", "Dismiss", {
      duration: 2000,
      verticalPosition: "top"
    });
  }



  save() {
    this.applicationModel.departmentId = this.selectedDepartmentID;
    this.applicationModel.lineOfBusiness = this.selectedLob;
    this.applicationModel.functionality = this.selectedFunctionality;
    if (this.initialId == Number(localStorage.getItem('savedApplicationID'))) {
      this.applicationService.storeApplicationDetails(this.applicationModel).subscribe((data: any) => {
        localStorage.setItem('savedApplicationID', data + '');
        this.openSnackBar(data);
      })
    }
    else {
      this.applicationModel.applicationId = Number(localStorage.getItem('savedApplicationID'));
      this.applicationService.updateApplicationDetails(this.applicationModel).subscribe((data: any) => {
      })
      this.openUpdateSnackBar();
    }
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
  selector: 'application-details-save-warning-dialog',
  templateUrl: 'application-details-save-warning-dialog.html',
})

export class ApplicationDetailsDialog {
  applicationModelDialog = new ApplicationDetails();
  saveId: number = 0;

  constructor(public dialogRef: MatDialogRef<ApplicationDetailsDialog>, public dialog: MatDialog, private _snackBar: MatSnackBar, private applicationService: ApplicationService, @Inject(MAT_DIALOG_DATA) public data: any) {
    this.applicationModelDialog = data.model;
    this.saveId = data.id;
  }
  save() {
    if (this.saveId == 0) {
      this.applicationService.storeApplicationDetails(this.applicationModelDialog).subscribe((data: any) => {
        localStorage.setItem('savedApplicationID', data + '');
        this.openSnackBar(data);
      })
      this.saveId++;
    }
    else {
      this.applicationModelDialog.applicationId = Number(localStorage.getItem('savedApplicationID'));
      this.applicationService.updateApplicationDetails(this.applicationModelDialog).subscribe((data: any) => {
      })
      this.openUpdateSnackBar();
    }

  }

  openSnackBar(id: number) {
    this._snackBar.open("Details are saved successfully. \nYour saved ID is " + id + '.', "Dismiss", {
      duration: 5000,
      verticalPosition: "top"
    });
  }

  openUpdateSnackBar() {
    this._snackBar.open("Details are updated successfully", "Dismiss", {
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
