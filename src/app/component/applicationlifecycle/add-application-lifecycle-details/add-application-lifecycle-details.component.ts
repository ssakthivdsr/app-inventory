import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-add-application-lifecycle-details',
  templateUrl: './add-application-lifecycle-details.component.html',
  styleUrls: ['./add-application-lifecycle-details.component.css']
})
export class AddApplicationLifecycleDetailsComponent implements OnInit {

  public constructor(private titleService: Title, private _snackBar: MatSnackBar) {
    this.titleService.setTitle("Inventory - Application Lifecycle Details");
  }

  message: string = "Some fields are not yet filled.";
  action: string = "Dismiss";
  count: boolean = true;
  isEmpty: boolean = true;

  ApplicationLifecycle: string = '';
  SitesApplicationsRunIn: string = '';
  PrimaryHardwareOS: string = '';
  PrimaryDevelopmentLanguage: string = '';
  SecondaryDevelopmentLanguage: string = '';
  PrimaryDatabaseTechnology: string = '';
  PartIsWebBased: string = '';
  FrequencyOfApplication: string = '';
  SizeOfChange: string = '';
  ApplicationTool: string = '';
  UniqueSkills: string = '';
  ReportingTool: string = '';
  TestEnvironmentReady: string = '';
  ApplicationSize: string = '';

  check() {
    if (this.ApplicationLifecycle === '' || this.SitesApplicationsRunIn === '' ||
      this.PrimaryHardwareOS === '' || this.PrimaryDevelopmentLanguage === '' ||
      this.SecondaryDevelopmentLanguage === '' || this.PrimaryDatabaseTechnology === '' ||
      this.PartIsWebBased === '' || this.FrequencyOfApplication === '' ||
      this.SizeOfChange === '' || this.ApplicationTool === '' ||
      this.UniqueSkills === '' || this.ReportingTool === '' ||
      this.TestEnvironmentReady === '' || this.ApplicationSize === '')
      return true;
    else
      return false;
  }
  openSnackBar(message: string, action: string) {
    this._snackBar.open(this.message, this.action, {
      verticalPosition: "top"
    });
    this.count = false;
  }

  save() { }

  ngOnInit(): void {

  }

}
