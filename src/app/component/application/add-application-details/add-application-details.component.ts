import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-add-application-details',
  templateUrl: './add-application-details.component.html',
  styleUrls: ['./add-application-details.component.css']
})
export class AddApplicationDetailsComponent implements OnInit {
  lineOfBusiness : string[] = ['Fire', 'Life', 'Auto'];
  constructor() { }

  ngOnInit(): void {
  }

}
