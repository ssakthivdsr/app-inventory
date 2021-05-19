import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { Regulatory } from 'src/app/model/regulatory.model';
import { RegulatoryService } from 'src/app/service/regulatory.service';

@Component({
  selector: 'app-edit-regulatory-details',
  templateUrl: './edit-regulatory-details.component.html',
  styleUrls: ['./edit-regulatory-details.component.css']
})
export class EditRegulatoryDetailsComponent implements OnInit {
  existingApplicationId: number = 0;
  regulatoryModel = new Regulatory();
  regulatoryName: string[] = ["Sarbanes-Oxley Act (SOA)", "Payment Card Industry (PCI) Data security standard", "State Breach Laws", "Graham-Leach-Billey Act (GLBA)", "Personal Information Protection and Electronic Documents Act (PIPEDA)", "Health Insurance Portability and Accountability Act (HIPAA)", "Children's On-Line Privacy Protection Act (COPPA)", "U.S.PAtriot Act", "U.S.Export law"];

  public constructor(private titleService: Title, private _snackBar: MatSnackBar, private router: Router, private dialog: MatDialog, private regulatoryService: RegulatoryService, private route: ActivatedRoute) {
    this.titleService.setTitle("Inventory - Regulatory Details");
  }

  ngOnInit(): void {
    this.regulatoryModel.regulatoryValue = [];
    this.existingApplicationId = Number(localStorage.getItem('applicationID'));
    this.regulatoryModel.applicationId = this.existingApplicationId;
    if (this.existingApplicationId != 0) {
      this.regulatoryService.retrieveRegulatoryByApplicationId(this.existingApplicationId).subscribe((data: Regulatory) => {
        this.regulatoryModel = data;
        console.log(data);
        //console.log("retrieved value:" + JSON.stringify(this.regulatoryModel.regulatoryValue));
      })
    }
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
    //this.regulatoryModel.applicationId = 76;
    if (this.regulatoryModel.regulatoryValue.length == 0)
      return true;
    else
      return false;
  }

  openDialog() {
    this.dialog.open(EditRegulatoryDialog);
  }

  openSnackBar() {
    this._snackBar.open("Details are updated successfully", "Dismiss", {
      duration: 2000,
      verticalPosition: "top"
    });
  }

  update() {
    this.regulatoryService.storeRegulatoryDetails(this.regulatoryModel).subscribe((data: any) => {
      //console.log(data);
      //console.log(this.regulatoryModel);
    })
    //console.log("updated");
    this.openSnackBar();
  }

  cancel() {
    localStorage.clear();
    this.router.navigate(['/landingPage']);
  }
}

@Component({
  selector: 'edit-regulatory-save-warning-dialog',
  templateUrl: 'edit-regulatory-save-warning-dialog.html',
})

export class EditRegulatoryDialog {
  regulatoryModel = new Regulatory();

  constructor(public dialogRef: MatDialogRef<EditRegulatoryDialog>, public dialog: MatDialog, private _snackBar: MatSnackBar, private regulatoryService: RegulatoryService) { }

  update() {
    //this.regulatoryModel.applicationId = 62;
    this.regulatoryService.storeRegulatoryDetails(this.regulatoryModel).subscribe((data: any) => {
      //console.log(data);
      //console.log(this.regulatoryModel);
    })
    this.openSnackBar();
  }

  openSnackBar() {
    this._snackBar.open("Details are updated successfully", "Dismiss", {
      duration: 2000,
      verticalPosition: "top"
    });
  }

  clickMethod() {
    this.update();
    this.dialogRef.close();
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}