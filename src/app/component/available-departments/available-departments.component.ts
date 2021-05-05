import { Component, OnInit, ViewChild } from '@angular/core';
import { UserService } from '../../service/user.service';
import { Department } from '../../model/department.model';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-available-departments',
  templateUrl: './available-departments.component.html',
  styleUrls: ['./available-departments.component.css']
})
export class AvailableDepartmentsComponent implements OnInit {
  departmentsRetrieved: Department[] = [];
  dataSourceD: any;
  displayedColumns: string[] = ['id', 'departmentname', 'departmentowner'];

  constructor(private userService: UserService) { }

  // @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatPaginator, {static: false})
  set paginator(value: MatPaginator) {
    if (this.dataSourceD){
      this.dataSourceD.paginator = value;
    }
  }

  ngOnInit(): void {
    this.retrieveAllDepartmentDetails();
    this.dataSourceD.paginator = this.paginator;
  }

  retrieveAllDepartmentDetails() {
    this.userService.retrieveAllDepartmentDetails().subscribe((data: Department[]) => {
      //console.log(data);
      this.departmentsRetrieved = data;
      this.dataSourceD = new MatTableDataSource(this.departmentsRetrieved);
      console.log(this.dataSourceD.filteredData);
      //console.log("retrieved value:" + this.departmentsRetrieved);
      //console.log(JSON.stringify(this.departmentsRetrieved));
    })
  }

}
