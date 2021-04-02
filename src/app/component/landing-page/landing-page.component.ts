import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {
  show : boolean = true;
  @Output() showMenu : EventEmitter<any> = new EventEmitter();
  constructor(private router: Router) { }

  go(){
    this.show = false;
    this.router.navigate(['/dept']);
    this.showMenu.emit(true);
  }

  ngOnInit(): void { }

}
