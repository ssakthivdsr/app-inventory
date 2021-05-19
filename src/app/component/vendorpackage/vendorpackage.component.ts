import { Component, Inject, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { VendorPackage } from 'src/app/model/vendorPackage.model';
import { VendorPackageService } from 'src/app/service/vendorPackage.service';


@Component({
  selector: 'app-vendorpackage',
  templateUrl: './vendorpackage.component.html',
  styleUrls: ['./vendorpackage.component.css']
})

export class VendorpackageComponent implements OnInit {
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
    this.dialog.open(VendorPacakageSaveWarningDialog, {
      data: this.vendorPackageModel
    });
  }

  openSnackBar() {
    this._snackBar.open("Details are saved successfully", "Dismiss", {
      duration: 2000,
      verticalPosition: "top"
    });
  }

  save() {
    this.vendorPackageService.storeVendorPackageDetails(this.vendorPackageModel).subscribe((data: any) => {
      console.log(this.vendorPackageModel);

    })
    console.log(this.vendorPackageModel);


    this.openSnackBar();

  }

  cancel() {
    this.router.navigate(['/landingPage']);
  }

  ngOnInit(): void {
    console.log(this.vendorPackageModel);
  }
}

@Component({
  selector: 'vendor-package-save-warning-dialog',
  templateUrl: 'vendor-package-save-warning-dialog.html',
})

export class VendorPacakageSaveWarningDialog {

  vendorPackageModelDialogue = new VendorPackage();
  constructor(public dialogRef: MatDialogRef<VendorPacakageSaveWarningDialog>, public dialog: MatDialog, private _snackBar: MatSnackBar, private vendorPackageService: VendorPackageService, @Inject(MAT_DIALOG_DATA) public data: any) { this.vendorPackageModelDialogue = data; }



  save() {
    this.vendorPackageService.storeVendorPackageDetails(this.vendorPackageModelDialogue).subscribe((data: any) => {
      console.log(this.vendorPackageModelDialogue);

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