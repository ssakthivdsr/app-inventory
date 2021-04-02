import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-add-application-lifecycle-details',
  templateUrl: './add-application-lifecycle-details.component.html',
  styleUrls: ['./add-application-lifecycle-details.component.css']
})
export class AddApplicationLifecycleDetailsComponent implements OnInit {

  public constructor(private titleService: Title) { 
    this.titleService.setTitle("Inventory - Application Lifecycle Details");
  }

  ngOnInit(): void {
  }

}
