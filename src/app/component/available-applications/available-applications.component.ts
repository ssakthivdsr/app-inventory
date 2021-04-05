import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

export interface Application {
  id : number;
  name: string;
}

const ELEMENT_DATA: Application[] = [
  {id: 1, name: 'Application-1'},
  {id: 2, name: 'Application-2'},
  {id: 3, name: 'Application-3'},
  {id: 4, name: 'Application-4'},
  {id: 5, name: 'Application-5'},
  {id: 6, name: 'Application-6'},
  {id: 7, name: 'Application-7'}  
];

@Component({
  selector: 'app-available-applications',
  templateUrl: './available-applications.component.html',
  styleUrls: ['./available-applications.component.css']
})
export class AvailableApplicationsComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name', 'Action'];
  dataSource = ELEMENT_DATA;

  show : boolean = true;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  back(){
    this.router.navigate(['/landingPage']);
  }

}
