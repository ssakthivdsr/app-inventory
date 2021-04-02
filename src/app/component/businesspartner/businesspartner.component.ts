import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-businesspartner',
  templateUrl: './businesspartner.component.html',
  styleUrls: ['./businesspartner.component.css']
})
export class BusinesspartnerComponent implements OnInit {

  public constructor(private titleService: Title) { 
    this.titleService.setTitle("Inventory - Business Partner Details");
 }

  ngOnInit(): void {
  }

}
