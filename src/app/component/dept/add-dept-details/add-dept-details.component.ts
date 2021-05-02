import { Component, OnInit, ChangeDetectorRef  } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from '../../../service/user.service';
import { Department } from '../../../model/department.model';

@Component({
  selector: 'app-add-dept-details',
  templateUrl: './add-dept-details.component.html',
  styleUrls: ['./add-dept-details.component.css']
})

export class AddDeptDetailsComponent implements OnInit {
  displayedColumns: string[] = ['id', 'departmentname', 'departmentowner'];
  public addDepFormGroup: FormGroup;
  departmentModel = new Department();
  departmentRetrieved = new Department();
  departmentsRetrieved: Department[] = [];


  constructor(private _snackBar: MatSnackBar, private router: Router, private userService: UserService,
     private changeDetectorRefs: ChangeDetectorRef) {
    this.addDepFormGroup = new FormGroup({});
  }

  ngOnInit() {
    this.addDepFormGroup = new FormGroup({
      DpName: new FormControl('', [Validators.required]),
      DpOwner: new FormControl('', [Validators.required])
    });
    this.userService.getDepartment().subscribe((data: Department) => {
      console.log(data);
      this.departmentRetrieved = data;
      console.log("retrieved value:" + this.departmentRetrieved);
      console.log(this.departmentRetrieved.departmentName);
      console.log(this.departmentRetrieved.departmentOwner);
    })
    this.userService.retrieveAllDepartmentDetails().subscribe((data: Department[]) => {
      console.log(data);
      this.departmentsRetrieved = data;
      this.changeDetectorRefs.detectChanges();
      console.log("retrieved value:" + this.departmentsRetrieved);
      console.log(JSON.stringify(this.departmentsRetrieved));
    })
  }

  retrieveAllDepartmentDetails() {
    this.userService.retrieveAllDepartmentDetails().subscribe((data: Department[]) => {
      console.log(data);
      this.departmentsRetrieved = data;
      console.log("retrieved value:" + this.departmentsRetrieved);
      console.log(JSON.stringify(this.departmentsRetrieved));
    })
  }

  save() {
    // this.userService.storeDeparttment(this.dpName,this.dpOwner).subscribe((data: any) => {
    //   console.log(data);
    //   // this.department = data
    // })
    this.userService.storeDepartmentDetails(this.departmentModel).subscribe((data: any) => {
      console.log(data);
    })
    this.retrieveAllDepartmentDetails();
    this.openSnackBar();
  }
  
  openSnackBar() {
    this._snackBar.open("Details are saved successfully", "Dismiss", {
      duration: 2000,
      verticalPosition: "top"
    });
  }

  public checkError = (controlName: string, errorName: string) => {
    return this.addDepFormGroup.controls[controlName].hasError(errorName);
  }

  cancel() {
    this.router.navigate(['/landingPage']);
  }
}