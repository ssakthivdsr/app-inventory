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
  public regulatoryRetrieved: Regulatory[] = [];
  showSpinner: Boolean;
  showDialogue: Boolean;


  public constructor(private titleService: Title, private _snackBar: MatSnackBar, private router: Router, private dialog: MatDialog, private regulatoryService: RegulatoryService, private route: ActivatedRoute) {
    this.titleService.setTitle("Inventory - Regulatory Details");
    for (this.i = 0; this.i < 10; this.i++)
      this.regulatoryRetrieved[this.i] = new Regulatory();

  }

  ngOnInit(): void {
    this.existingApplicationId = Number(localStorage.getItem('applicationID'));

    if (this.existingApplicationId != 0) {
      this.regulatoryService.retrieveRegulatoryByApplicationId(this.existingApplicationId).subscribe((data: Regulatory[]) => {
        if (data.length != 0) {
          this.regulatoryRetrieved = data;
        }
        else {
          for (this.i = 0; this.i < 10; this.i++) {
            this.regulatoryRetrieved[this.i] = new Regulatory();
            this.regulatoryRetrieved[this.i].regulatoryValue = false;
          }
          // console.log(this.regulatoryRetrieved);
        }


      })
    }
  }

  Method() {

    this.showSpinner = true;
    setTimeout(() => { this.showSpinner = false }
      , 5000);

  }

  clickMethod() {

    this.update();
    this.showDialogue = false;

  }

  onNoClick(): void {
    this.showDialogue = false;
  }

  check() {

    for (this.i = 0; this.i < 10; this.i++) {
      if (this.regulatoryRetrieved[this.i].regulatoryValue) {
        return false;
      }
    }
    return true;
  }

  openDialog() {
    // this.dialog.open(EditRegulatoryDialog);
    this.showDialogue = true;
  }

  openSnackBar() {
    this.showSpinner = false;
    this._snackBar.open("Details are updated successfully", "Dismiss", {
      duration: 2000,
      verticalPosition: "top"
    });
  }

  update() {
    this.showSpinner = true;
    for (this.i = 0; this.i < 10; this.i++) {
      this.regulatoryRetrieved[this.i].applicationId = Number(localStorage.getItem('applicationID'));
    }
    this.regulatoryService.updateRegulatoryDetails(this.regulatoryRetrieved).subscribe((data: any) => {
      this.showSpinner = false;
      this.openSnackBar();
    })
    //console.log(this.regulatoryRetrieved);

    // this.openSnackBar();
  }

  cancel() {
    localStorage.clear();
    this.router.navigate(['/landingPage']);
  }
}

// @Component({
//   selector: 'edit-regulatory-save-warning-dialog',
//   templateUrl: 'edit-regulatory-save-warning-dialog.html',
// })

// export class EditRegulatoryDialog {

//   i: number;
//   public regulatoryRetrievedModel: Regulatory[] = [{ regulatoryId: 0, applicationId: Number(localStorage.getItem('savedApplicationID')), regulatoryValue: false },
//   { regulatoryId: 0, applicationId: Number(localStorage.getItem('ApplicationID')), regulatoryValue: false },
//   { regulatoryId: 0, applicationId: Number(localStorage.getItem('ApplicationID')), regulatoryValue: false },
//   { regulatoryId: 0, applicationId: Number(localStorage.getItem('ApplicationID')), regulatoryValue: false },
//   { regulatoryId: 0, applicationId: Number(localStorage.getItem('ApplicationID')), regulatoryValue: false },
//   { regulatoryId: 0, applicationId: Number(localStorage.getItem('ApplicationID')), regulatoryValue: false },
//   { regulatoryId: 0, applicationId: Number(localStorage.getItem('ApplicationID')), regulatoryValue: false },
//   { regulatoryId: 0, applicationId: Number(localStorage.getItem('ApplicationID')), regulatoryValue: false },
//   { regulatoryId: 0, applicationId: Number(localStorage.getItem('ApplicationID')), regulatoryValue: false },
//   { regulatoryId: 0, applicationId: Number(localStorage.getItem('ApplicationID')), regulatoryValue: false }];


//   constructor(public dialogRef: MatDialogRef<EditRegulatoryDialog>, public dialog: MatDialog, private _snackBar: MatSnackBar, private regulatoryService: RegulatoryService) { }

//   update() {
//     for (this.i = 0; this.i < 10; this.i++) {
//       this.regulatoryRetrievedModel[this.i].applicationId = Number(localStorage.getItem('applicationID'));
//     }
//     this.regulatoryService.updateRegulatoryDetails(this.regulatoryRetrievedModel).subscribe((data: any) => {
//     })
//     this.openSnackBar();
//     //console.log(this.regulatoryRetrievedModel);
//   }

//   openSnackBar() {
//     this._snackBar.open("Details are updated successfully", "Dismiss", {
//       duration: 2000,
//       verticalPosition: "top"
//     });
//   }

//   clickMethod() {
//     this.update();
//     this.dialogRef.close();
//   }

//   onNoClick(): void {
//     this.dialogRef.close();
//   }
// }