import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-vendorpackage',
  templateUrl: './vendorpackage.component.html',
  styleUrls: ['./vendorpackage.component.css']
})

export class VendorpackageComponent implements OnInit {

  public constructor(private titleService: Title, private _snackBar: MatSnackBar, private router: Router, private dialog: MatDialog) {
    this.titleService.setTitle("Inventory - Vender Package Details");
  }

  VendorEngagementsAssociatedWithManagedServicesVendor: string = '';
  //TypeOfPackage: 'Vendor' | 'Customer' = 'Vendor';
  TypeOfPackage: string = '';
  VendorName: string = '';
  VendorEngagementsAssociatedWithVendorPackageVendor: string = '';
  DegreeOfCustomization: string = '';
  HostedLocation: string = '';
  VendorHostedName: string = '';
  VendorEngagementsAssociatedWithExternallyHostedVendor: string = '';
  //IsMostCurrentVendorSoftwareVersion: 'Yes' | 'No' = 'Yes';
  IsMostCurrentVendorSoftwareVersion: string = '';
  VendorPackageVersion: string = '';
  FrequencyOfVendorUpgrades: string = '';
  FrequencyOfPatches: string = '';

  check() {
    if (this.VendorEngagementsAssociatedWithManagedServicesVendor === '' || this.TypeOfPackage === '' ||
      this.VendorName === '' || this.VendorEngagementsAssociatedWithVendorPackageVendor === '' ||
      this.DegreeOfCustomization === '' || this.HostedLocation === '' ||
      this.VendorHostedName === '' || this.VendorEngagementsAssociatedWithExternallyHostedVendor === '' ||
      this.IsMostCurrentVendorSoftwareVersion === '' || this.VendorPackageVersion === '' ||
      this.FrequencyOfVendorUpgrades === '' || this.FrequencyOfPatches === '')
      return true;
    else
      return false;
  }

  openDialog() {
    this.dialog.open(DialogElementsExampleDialog);
  }

  openSnackBar() {
    this._snackBar.open("Details are saved successfully", "Dismiss", {
      duration: 2000,
      verticalPosition: "top"
    });
  }

  save() {
    //console.log("saved");
    this.openSnackBar();
  }

  cancel() {
    this.router.navigate(['/landingPage']);
  }

  ngOnInit(): void {
  }
}

@Component({
  selector: 'dialog-elements-example-dialog',
  templateUrl: 'dialog-elements-example-dialog.html',
})

export class DialogElementsExampleDialog {

  constructor(public dialogRef: MatDialogRef<DialogElementsExampleDialog>, public dialog: MatDialog, private _snackBar: MatSnackBar) { }

  save() {
    //console.log("saved");
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