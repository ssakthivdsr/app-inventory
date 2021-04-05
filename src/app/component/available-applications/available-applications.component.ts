import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-available-applications',
  templateUrl: './available-applications.component.html',
  styleUrls: ['./available-applications.component.css']
})
export class AvailableApplicationsComponent implements OnInit {
  show : boolean = true;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  back(){
    this.router.navigate(['/landingPage']);
  }

}
