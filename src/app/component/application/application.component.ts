import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.css']
})
export class ApplicationComponent implements OnInit {

  public constructor(private titleService: Title) { 
     this.titleService.setTitle("Inventory - Application Details");
  }
  ngOnInit(): void { 
  }

}
