import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-vendorpackage',
  templateUrl: './vendorpackage.component.html',
  styleUrls: ['./vendorpackage.component.css']
})
export class VendorpackageComponent implements OnInit {

  public constructor(private titleService: Title) { 
    this.titleService.setTitle("Inventory - Vender Package Details");
  }

  ngOnInit(): void {
  }

}
