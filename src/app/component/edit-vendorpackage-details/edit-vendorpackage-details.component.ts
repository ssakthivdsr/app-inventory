import { Component, Inject, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { VendorPackage } from 'src/app/model/vendorPackage.model';
import { VendorPackageService } from 'src/app/service/vendorPackage.service';

@Component({
  selector: 'app-edit-vendorpackage-details',
  templateUrl: './edit-vendorpackage-details.component.html',
  styleUrls: ['./edit-vendorpackage-details.component.css']
})

export class EditVendorpackageDetailsComponent implements OnInit {
  existingApplicationId: number = 0;
  vendorPackageModel = new VendorPackage();
  ValidNumberIndicator = true;

  public constructor(private titleService: Title, private _snackBar: MatSnackBar, private router: Router, private dialog: MatDialog, private vendorPackageService: VendorPackageService) {
    this.titleService.setTitle("Inventory - Vender Package Details");
  }

  check() {
    if (this.vendorPackageModel.engAssociatedManagedServices === "" || this.vendorPackageModel.packageType === null ||
      this.vendorPackageModel.name === "" || this.vendorPackageModel.engAssociatedWithVendorPackage === "" ||
      this.vendorPackageModel.degreeOfCustomization === "" || this.vendorPackageModel.hostedLocation === "" ||
      this.vendorPackageModel.hostedName === "" || this.vendorPackageModel.engAssociatedWithEsternallyHostedVendor === '' ||
      this.vendorPackageModel.isLatestSwVersion === null || this.vendorPackageModel.packageVersion === "" ||
      this.vendorPackageModel.frequencyOfUpdates === "" || this.vendorPackageModel.frequencyOfPatches === "")
      return true;
    else
      return false;
  }

  onlyNumbers(event: { which: any; keyCode: any; }) {
    const ch = (event.which) ? event.which : event.keyCode;
    if (ch > 31 && (ch < 48 || ch > 57)) {
      this.ValidNumberIndicator = false;

      return this.ValidNumberIndicator;
    }
    this.ValidNumberIndicator = true;
    return this.ValidNumberIndicator;
  }

  openDialog() {
    this.dialog.open(EditVendorPacakageSaveWarningDialog, {
      data: this.vendorPackageModel
    });
  }

  openSnackBar() {
    this._snackBar.open("Details are saved successfully", "Dismiss", {
      duration: 2000,
      verticalPosition: "top"
    });
  }

  update() {
    //console.log("updated");
    this.vendorPackageService.storeVendorPackageDetails(this.vendorPackageModel).subscribe((data: any) => {
      //console.log(this.vendorPackageModel);
      this.openSnackBar();
    })
  }

  cancel() {
    localStorage.clear();
    this.router.navigate(['/landingPage']);
  }

  ngOnInit(): void {
    //console.log(this.vendorPackageModel);
    this.existingApplicationId = Number(localStorage.getItem('applicationID'));
    //console.log(this.existingApplicationId);
    if (this.existingApplicationId != 0) {
      this.vendorPackageService.retrieveVendorPackageByApplicationId(this.existingApplicationId).subscribe((data: VendorPackage) => {
        //console.log(this.vendorPackageModel);
        this.vendorPackageModel = data;
        //console.log(data.isLatestSwVersion);
        this.vendorPackageModel.isLatestSwVersion = data.isLatestSwVersion;
        console.log(this.vendorPackageModel.isLatestSwVersion);
      })
    }
  }
}

@Component({
  selector: 'edit-vendor-package-save-warning-dialog',
  templateUrl: 'edit-vendor-package-save-warning-dialog.html',
})

export class EditVendorPacakageSaveWarningDialog {
  vendorPackageModelDialogue = new VendorPackage();

  constructor(public dialogRef: MatDialogRef<EditVendorPacakageSaveWarningDialog>, public dialog: MatDialog, private _snackBar: MatSnackBar, private vendorPackageService: VendorPackageService, @Inject(MAT_DIALOG_DATA) public data: any) {
    this.vendorPackageModelDialogue = data;
  }

  update() {
    //console.log("updated");
    this.vendorPackageService.storeVendorPackageDetails(this.vendorPackageModelDialogue).subscribe((data: any) => {
      //console.log(this.vendorPackageModelDialogue);
      this.openSnackBar();
    })
  }

  openSnackBar() {
    this._snackBar.open("Details are saved successfully", "Dismiss", {
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
