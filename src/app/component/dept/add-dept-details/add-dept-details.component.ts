import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-dept-details',
  templateUrl: './add-dept-details.component.html',
  styleUrls: ['./add-dept-details.component.css']
})
export class AddDeptDetailsComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit(): void {
  }

  
  cancel(){
    this.router.navigate(['/landingPage']);
  }

}
