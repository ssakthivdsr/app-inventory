import { Component, OnInit } from '@angular/core';
import { UserService } from '../../service/user.service';
import { Department } from '../../model/department.model';

@Component({
  selector: 'app-available-departments',
  templateUrl: './available-departments.component.html',
  styleUrls: ['./available-departments.component.css']
})
export class AvailableDepartmentsComponent implements OnInit {
  departmentsRetrieved: Department[] = [];
  displayedColumns: string[] = ['id', 'departmentname', 'departmentowner'];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
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

}
