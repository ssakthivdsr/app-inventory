import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Regulatory } from '../model/regulatory.model';
import { RegulatoryService } from '../service/regulatory.service';

@Component({
  selector: 'app-regulatory',
  templateUrl: './regulatory.component.html',
  styleUrls: ['./regulatory.component.css']
})

export class RegulatoryComponent implements OnInit {
  regulatoryModel = new Regulatory();
  regulatoryName: string[] = ["Sarbanes-Oxley Act (SOA)", "Payment Card Industry (PCI) Data security standard", "State Breach Laws", "Graham-Leach-Billey Act (GLBA)", "Personal Information Protection and Electronic Documents Act (PIPEDA)", "Health Insurance Portability and Accountability Act (HIPAA)", "Children's On-Line Privacy Protection Act (COPPA)", "U.S.PAtriot Act", "U.S.Export law"];

  public constructor(private titleService: Title, private _snackBar: MatSnackBar, private router: Router, private dialog: MatDialog, private regulatoryService: RegulatoryService) {
    this.titleService.setTitle("Inventory - Regulatory Details");
  }

  onValueSelection(event: any, names: string) {
    if (event.checked) {
      console.log(names + ' checked');
      this.regulatoryModel.regulatoryValue.push(names);
    }
    else {
      console.log(names + ' unchecked');
      this.regulatoryModel.regulatoryValue = this.regulatoryModel.regulatoryValue.filter(m => m != names);
    }
    //console.log(this.regulatoryModel.regulatoryValue)
  }

  check() {
    this.regulatoryModel.applicationId = 62;
    if (this.regulatoryModel.regulatoryValue.length == 0)
      return true;
    else
      return false;
  }

  openDialog() {
    this.dialog.open(RegulatoryDialog);
  }

  openSnackBar() {
    this._snackBar.open("Details are saved successfully", "Dismiss", {
      duration: 2000,
      verticalPosition: "top"
    });
  }

  save() {
    this.regulatoryService.storeRegulatoryDetails(this.regulatoryModel).subscribe((data: any) => {
      //console.log(data);
      //console.log(this.regulatoryModel);
    })
    //console.log("saved");
    this.openSnackBar();
  }

  cancel() {
    this.router.navigate(['/landingPage']);
  }

  ngOnInit(): void {
    this.regulatoryModel.regulatoryValue = [];
  }
}

@Component({
  selector: 'regulatory-save-warning-dialog',
  templateUrl: 'regulatory-save-warning-dialog.html',
})

export class RegulatoryDialog {
  regulatoryModel = new Regulatory();

  constructor(public dialogRef: MatDialogRef<RegulatoryDialog>, public dialog: MatDialog, private _snackBar: MatSnackBar, private regulatoryService: RegulatoryService) { }

  save() {
    this.regulatoryModel.applicationId = 62;
    this.regulatoryService.storeRegulatoryDetails(this.regulatoryModel).subscribe((data: any) => {
      //console.log(data);
      //console.log(this.regulatoryModel);
    })
    this.openSnackBar();
  }

  openSnackBar() {
    this._snackBar.open("Details are saved successfully", "Dismiss", {
      duration: 2000,
      verticalPosition: "top"
    });
  }

  clickMethod() {
    this.save();
    this.dialogRef.close();
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}