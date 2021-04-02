import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-dept',
  templateUrl: './dept.component.html',
  styleUrls: ['./dept.component.css']
})
export class DeptComponent implements OnInit {

 public constructor(private titleService: Title) { 
    this.titleService.setTitle("Inventory - Department Details");
 }

  ngOnInit(): void {
  }

}
