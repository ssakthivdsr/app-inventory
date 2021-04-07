import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {
  show : boolean = true;
  selected : string = '';
  constructor(private router: Router) { }

  go(){
    this.show = false;
    if(this.selected === '1'){
      this.router.navigate(['/header/dept']);
    } else {
      this.router.navigate(['/layout/availableApplications']);
    }
    
  }

  ngOnInit(): void { }

}
