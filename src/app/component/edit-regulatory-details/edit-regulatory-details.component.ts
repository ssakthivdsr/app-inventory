import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
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
  i: number = 0;
  existingApplicationId: number = 0;
  public regulatoryRetrieved: Regulatory[];

  public constructor(private titleService: Title, private _snackBar: MatSnackBar, private router: Router, private dialog: MatDialog, private regulatoryService: RegulatoryService, private route: ActivatedRoute) {
    this.titleService.setTitle("Inventory - Regulatory Details");

  }

  ngOnInit(): void {
    this.existingApplicationId = Number(localStorage.getItem('applicationID'));

    if (this.existingApplicationId != 0) {
      this.regulatoryService.retrieveRegulatoryByApplicationId(this.existingApplicationId).subscribe((data: Regulatory[]) => {
        this.regulatoryRetrieved = data;
        //console.log(data);
      })
    }
  }

  check() {

    for (this.i = 0; this.i < this.regulatoryRetrieved.length; this.i++) {
      if (this.regulatoryRetrieved[this.i].regulatoryValue) {
        return false;
      }
    }
    return true;
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
    for (this.i = 0; this.i < this.regulatoryRetrieved.length; this.i++) {
      this.regulatoryRetrieved[this.i].applicationId = Number(localStorage.getItem('applicationID'));
    }
    this.regulatoryService.updateRegulatoryDetails(this.regulatoryRetrieved).subscribe((data: any) => {
    })
    //console.log(this.regulatoryRetrieved);

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

  i: number;
  public regulatoryRetrievedModel: Regulatory[] = [{ regulatoryId: 0, applicationId: Number(localStorage.getItem('savedApplicationID')), regulatoryValue: false },
  { regulatoryId: 0, applicationId: Number(localStorage.getItem('ApplicationID')), regulatoryValue: false },
  { regulatoryId: 0, applicationId: Number(localStorage.getItem('ApplicationID')), regulatoryValue: false },
  { regulatoryId: 0, applicationId: Number(localStorage.getItem('ApplicationID')), regulatoryValue: false },
  { regulatoryId: 0, applicationId: Number(localStorage.getItem('ApplicationID')), regulatoryValue: false },
  { regulatoryId: 0, applicationId: Number(localStorage.getItem('ApplicationID')), regulatoryValue: false },
  { regulatoryId: 0, applicationId: Number(localStorage.getItem('ApplicationID')), regulatoryValue: false },
  { regulatoryId: 0, applicationId: Number(localStorage.getItem('ApplicationID')), regulatoryValue: false },
  { regulatoryId: 0, applicationId: Number(localStorage.getItem('ApplicationID')), regulatoryValue: false },
  { regulatoryId: 0, applicationId: Number(localStorage.getItem('ApplicationID')), regulatoryValue: false }];


  constructor(public dialogRef: MatDialogRef<EditRegulatoryDialog>, public dialog: MatDialog, private _snackBar: MatSnackBar, private regulatoryService: RegulatoryService) { }

  update() {
    for (this.i = 0; this.i < this.regulatoryRetrievedModel.length; this.i++) {
      this.regulatoryRetrievedModel[this.i].applicationId = Number(localStorage.getItem('applicationID'));
    }
    this.regulatoryService.updateRegulatoryDetails(this.regulatoryRetrievedModel).subscribe((data: any) => {
    })
    this.openSnackBar();
    //console.log(this.regulatoryRetrievedModel);
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