import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dept',
  templateUrl: './dept.component.html',
  styleUrls: ['./dept.component.css']
})
export class DeptComponent implements OnInit {

  public constructor(private titleService: Title, private router: Router) {
    this.titleService.setTitle("Inventory - Department Details");
  }

  ngOnInit(): void {

  }

  save() {
  }
}