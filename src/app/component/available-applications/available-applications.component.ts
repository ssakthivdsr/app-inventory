import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';

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

export class AvailableApplicationsComponent implements OnInit, OnDestroy {

  displayedColumns: string[] = ['id', 'name', 'Action'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);;
  _mobileQueryListener: () => void;
  show : boolean = true;
  mobileQuery: MediaQueryList;
  filterValue: string = "";
  searchString : String = "";
  
  
  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, private router: Router) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  // applyFilter() {
  //   // alert("call came");
  //   this.filterValue = this.filterValue.trim().toLowerCase(); // Remove whitespace
  //   // filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
  //   this.dataSource.filter = this.filterValue;
  // }
  applyFilter(event : Event) {
    
    this.filterValue = (event.target as HTMLInputElement).value;
    this.filterValue = this.filterValue.trim(); // Remove whitespace
    this.filterValue = this.filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = this.filterValue;
  }
  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
    this.show = false;
  }

  back(){
    this.router.navigate(['/landingPage']);
  }

  hideApplications(){
    this.show = false;
  }

  showApplications(){
    this.show = true;
  }

  editApplication(int : number){
    this.router.navigate(['/layout/editApplication']);
  }

}
