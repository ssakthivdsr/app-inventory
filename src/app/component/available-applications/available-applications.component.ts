import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { animate, state, style, transition, trigger } from '@angular/animations';

export interface Application {
  id: number;
  name: string;
  businessTotal: number;
  businessValue: number;
  agility: number;
  techTotal: number;
  applicationCompletedStatus:String;
}

const ELEMENT_DATA: Application[] = [
  { id: 1, name: 'Application-1', businessTotal: 11, businessValue: 11, agility: 11, techTotal: 11, applicationCompletedStatus: '70%' },
  { id: 2, name: 'Application-2', businessTotal: 22, businessValue: 22, agility: 22, techTotal: 22, applicationCompletedStatus: '75%' },
  { id: 3, name: 'Application-3', businessTotal: 33, businessValue: 33, agility: 33, techTotal: 33, applicationCompletedStatus: '62%' },
  { id: 4, name: 'Application-4', businessTotal: 44, businessValue: 44, agility: 44, techTotal: 44, applicationCompletedStatus: '85%' },
  { id: 5, name: 'Application-5', businessTotal: 55, businessValue: 55, agility: 55, techTotal: 55, applicationCompletedStatus: '78%' },
  { id: 6, name: 'Application-6', businessTotal: 66, businessValue: 66, agility: 66, techTotal: 66, applicationCompletedStatus: '90%' },
  { id: 7, name: 'Application-7', businessTotal: 77, businessValue: 77, agility: 77, techTotal: 77, applicationCompletedStatus: '95%' },
  { id: 8, name: 'My-application', businessTotal: 88, businessValue: 88, agility: 88, techTotal: 88, applicationCompletedStatus: '88%' },
];

@Component({
  selector: 'app-available-applications',
  templateUrl: './available-applications.component.html',
  styleUrls: ['./available-applications.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})

export class AvailableApplicationsComponent implements OnInit, OnDestroy {

  displayedColumns: string[] = ['id', 'name', 'Action', 'Score','applicationCompletedStatus'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);;
  _mobileQueryListener: () => void;
  isExpanded: Application | undefined;
  show: boolean = true;
  mobileQuery: MediaQueryList;
  filterValue: string = "";
  searchString: String = "";


  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, private router: Router) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  applyFilter(event: Event) {
    this.filterValue = (event.target as HTMLInputElement).value;
    this.filterValue = this.filterValue.trim(); // Remove whitespace
    this.filterValue = this.filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = this.filterValue;
  }
  ngOnInit(): void { }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
    this.show = false;
  }

  back() {
    this.router.navigate(['/landingPage']);
  }

  hideApplications() {
    this.show = false;
  }

  showApplications() {
    this.show = true;
  }

  editApplication(int: number) {
    this.router.navigate(['/layout/editApplication']);
  }

}
