import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-regulatory',
  templateUrl: './regulatory.component.html',
  styleUrls: ['./regulatory.component.css']
})
export class RegulatoryComponent implements OnInit {

  public constructor(private titleService: Title) { 
    this.titleService.setTitle("Inventory - Regulatory Details");
  }

  ngOnInit(): void {
  }

}
