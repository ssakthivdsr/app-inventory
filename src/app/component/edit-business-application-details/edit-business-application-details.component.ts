import { ChangeDetectorRef, Component, Inject, OnInit } from '@angular/core';
import { Validators, FormArray, FormBuilder, FormControl } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { BusinessApplicationDetails } from '../../model/businessApplicationDetails.model';
import { BusinessApplicationService } from '../../service/businessapplication.service';

@Component({
  selector: 'app-edit-business-application-details',
  templateUrl: './edit-business-application-details.component.html',
  styleUrls: ['./edit-business-application-details.component.css']
})

export class EditBusinessApplicationDetailsComponent implements OnInit {
  existingAppId: number = 0;
  existingAppIdEdit: number = 0;
  businessApplicationModel = new BusinessApplicationDetails();
  i: number = 0;
  public myForm: any = null;
  checked = false;
  indeterminate = false;
  ValidNumberIndicator = true;

  constructor(private _fb: FormBuilder, private dialog: MatDialog, private _snackBar: MatSnackBar, private router: Router, private businessApplicationService: BusinessApplicationService) { }

  ngOnInit() {
    this.myForm = this._fb.group({
      name: ['', [Validators.required, Validators.minLength(5)]],
      f: new FormControl("", [Validators.pattern(/\d/)]),
      addresses: this._fb.array([
        this.initAddress(),
      ]),
      users: this._fb.array([
        this.initUsers(),
      ]),
      channels: this._fb.array([
        this.initChannels(),
      ]),
      products: this._fb.array([
        this.initProducts(),
      ])
    });



    this.existingAppIdEdit = Number(localStorage.getItem('applicationID'));
    if (this.existingAppIdEdit != 0) {
      this.businessApplicationService.retrieveBusinessApplicationByApplicationId(this.existingAppIdEdit).subscribe((data: BusinessApplicationDetails) => {
        console.log(data);
        if (data.channels.length > 0) {
          this.businessApplicationModel.channels = data.channels;
          for (this.i = 0; this.i < data.channels.length - 1; this.i++) {
            const c3 = <FormArray>this.myForm.controls['channels'];
            c3.push(this.initChannels());
          }
        }
        else {
          this.businessApplicationModel.channels = [{ id: 1, applicationId: 1, channelType: '', volume: null, volumeObject: { transaction2018: '', transaction2019: '', transaction2020: '' } }];
        }
        if (data.transactions.length > 0) {
          this.businessApplicationModel.transactions = data.transactions;
          for (this.i = 0; this.i < data.transactions.length - 1; this.i++) {
            const c1 = <FormArray>this.myForm.controls['addresses'];
            c1.push(this.initAddress());
          }
        }
        else {
          this.businessApplicationModel.transactions = [{ id: 1, applicationId: 1, transactionType: '', volume: null, volumeObject: { transaction2018: '', transaction2019: '', transaction2020: '' } }];
        }
        if (data.products.length > 0) {
          this.businessApplicationModel.products = data.products;
          for (this.i = 0; this.i < data.products.length - 1; this.i++) {
            const c2 = <FormArray>this.myForm.controls['products'];
            c2.push(this.initProducts());
          }
        }
        else {
          this.businessApplicationModel.products = [{ id: 1, applicationId: 1, productType: '', volume: null, volumeObject: { transaction2018: '', transaction2019: '', transaction2020: '' }, writtenPremiumOfProducts: null, writtenPremiumOfProductsObject: { transaction2018: '', transaction2019: '', transaction2020: '' } }];
        }
        if (data.users.length > 0) {
          this.businessApplicationModel.users = data.users;
          for (this.i = 0; this.i < data.users.length - 1; this.i++) {
            const c4 = <FormArray>this.myForm.controls['users'];
            c4.push(this.initUsers());
          }

        }
        else {
          this.businessApplicationModel.users = [{ id: 1, applicationId: 1, userType: '', volume: null, volumeObject: { transaction2018: '', transaction2019: '', transaction2020: '' } }];
        }
        if (data.businessApplicationQuestionAnswer.length > 0) {
          this.businessApplicationModel.businessApplicationQuestionAnswer = data.businessApplicationQuestionAnswer;
        }
        else {
          this.businessApplicationModel.businessApplicationQuestionAnswer = [
            { applicationId: 1, questionId: 1, answer: '' },
            { applicationId: 1, questionId: 2, answer: '' },
            { applicationId: 1, questionId: 3, answer: '' },
            { applicationId: 1, questionId: 4, answer: '' },
            { applicationId: 1, questionId: 5, answer: '' },
            { applicationId: 1, questionId: 6, answer: '' },
            { applicationId: 1, questionId: 7, answer: '' },
            { applicationId: 1, questionId: 8, answer: '' },
            { applicationId: 1, questionId: 9, answer: '' },
            { applicationId: 1, questionId: 10, answer: '' },
            { applicationId: 1, questionId: 11, answer: '' },
            { applicationId: 1, questionId: 12, answer: '' },
            { applicationId: 1, questionId: 13, answer: '' },
            { applicationId: 1, questionId: 14, answer: '' },
            { applicationId: 1, questionId: 15, answer: '' },
            { applicationId: 1, questionId: 16, answer: '' },
            { applicationId: 1, questionId: 17, answer: '' },
            { applicationId: 1, questionId: 18, answer: '' },
            { applicationId: 1, questionId: 19, answer: '' },
          ];
        }
      })
    }
  }

  initAddress() {
    return this._fb.group({
      street: ['', Validators.required],
      postcode: ['']
    });
  }

  addAddress() {
    (this.businessApplicationModel.transactions).push({ id: 1, applicationId: 1, transactionType: '', volume: null, volumeObject: { transaction2018: '', transaction2019: '', transaction2020: '' } });
    const control = <FormArray>this.myForm.controls['addresses'];
    control.push(this.initAddress());
  }

  removeAddress(i: number) {
    this.businessApplicationModel.transactions.splice(i, 1);
    const control = <FormArray>this.myForm.controls['addresses'];
    control.removeAt(i);
  }

  initUsers() {
    return this._fb.group({
      street: ['', Validators.required],
      postcode: ['']
    });
  }

  addUsers() {
    (this.businessApplicationModel.users).push({ id: 1, applicationId: 1, userType: '', volume: null, volumeObject: { transaction2018: '', transaction2019: '', transaction2020: '' } });
    const control = <FormArray>this.myForm.controls['users'];
    control.push(this.initUsers());
  }

  removeUsers(i: number) {
    this.businessApplicationModel.users.splice(i, 1);
    const control = <FormArray>this.myForm.controls['users'];
    control.removeAt(i);
  }

  initChannels() {
    return this._fb.group({
      street: ['', Validators.required],
      postcode: ['']
    });
  }

  addChannels() {
    (this.businessApplicationModel.channels).push({ id: 1, applicationId: 1, channelType: '', volume: null, volumeObject: { transaction2018: '', transaction2019: '', transaction2020: '' } });
    const control = <FormArray>this.myForm.controls['channels'];
    control.push(this.initChannels());
  }

  removeChannels(i: number) {
    this.businessApplicationModel.channels.splice(i, 1);
    const control = <FormArray>this.myForm.controls['channels'];
    control.removeAt(i);
  }

  initProducts() {
    return this._fb.group({
      street: ['', Validators.required],
      postcode: ['']
    });
  }

  addProducts() {
    (this.businessApplicationModel.products).push({ id: 1, applicationId: 1, productType: '', volume: null, volumeObject: { transaction2018: '', transaction2019: '', transaction2020: '' }, writtenPremiumOfProducts: null, writtenPremiumOfProductsObject: { transaction2018: '', transaction2019: '', transaction2020: '' } });
    const control = <FormArray>this.myForm.controls['products'];
    control.push(this.initProducts());
  }

  removeProducts(i: number) {
    this.businessApplicationModel.products.splice(i, 1);
    const control = <FormArray>this.myForm.controls['products'];
    control.removeAt(i);
  }

  check() {
    if (false)
      return true;
    else
      return false;
  }

  openDialog() {
    this.dialog.open(EditBusinessApplicationSaveWarningDialog, {
      data: this.businessApplicationModel
    });
  }


  update() {

    for (this.i = 0; this.i < this.businessApplicationModel.channels.length; this.i++) {
      this.businessApplicationModel.channels[this.i].applicationId = this.existingAppIdEdit;
    }
    for (this.i = 0; this.i < this.businessApplicationModel.products.length; this.i++) {
      this.businessApplicationModel.products[this.i].applicationId = this.existingAppIdEdit;
    }
    for (this.i = 0; this.i < this.businessApplicationModel.transactions.length; this.i++) {
      this.businessApplicationModel.transactions[this.i].applicationId = this.existingAppIdEdit;
    }
    for (this.i = 0; this.i < this.businessApplicationModel.users.length; this.i++) {
      this.businessApplicationModel.users[this.i].applicationId = this.existingAppIdEdit;
    }
    for (this.i = 0; this.i < this.businessApplicationModel.businessApplicationQuestionAnswer.length; this.i++) {
      this.businessApplicationModel.businessApplicationQuestionAnswer[this.i].applicationId = this.existingAppIdEdit;
    }
    this.businessApplicationService.updateBusinessApplicationDetails(this.businessApplicationModel).subscribe((data: any) => {
    })
    //console.log(this.businessApplicationModel);
    //console.log(this.businessApplicationModel.businessApplicationQuestionAnswer);
    this.openSnackBar();
  }

  openSnackBar() {
    this._snackBar.open("Details are saved successfully", "Dismiss", {
      duration: 2000,
      verticalPosition: "top"
    });
  }

  cancel() {
    localStorage.clear();
    this.router.navigate(['/landingPage']);
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


}

@Component({
  selector: 'edit-business-application-save-warning-dialog',
  templateUrl: 'edit-business-application-save-warning-dialog.html',
})

export class EditBusinessApplicationSaveWarningDialog {
  i: number = 0;
  businessApplicationModelDialog = new BusinessApplicationDetails();

  constructor(public dialogRef: MatDialogRef<EditBusinessApplicationSaveWarningDialog>, public dialog: MatDialog, private _snackBar: MatSnackBar, private businessApplicationService: BusinessApplicationService,
    private changeDetectorRefs: ChangeDetectorRef, @Inject(MAT_DIALOG_DATA) public data: any) {
    this.businessApplicationModelDialog = data;
  }

  update() {
    for (this.i = 0; this.i < this.businessApplicationModelDialog.transactions.length; this.i++) {
      this.businessApplicationModelDialog.transactions[this.i].applicationId = Number(localStorage.getItem('savedApplicationID'));
    }
    for (this.i = 0; this.i < this.businessApplicationModelDialog.channels.length; this.i++) {
      this.businessApplicationModelDialog.channels[this.i].applicationId = Number(localStorage.getItem('savedApplicationID'));
    }
    for (this.i = 0; this.i < this.businessApplicationModelDialog.products.length; this.i++) {
      this.businessApplicationModelDialog.products[this.i].applicationId = Number(localStorage.getItem('savedApplicationID'));
    }
    for (this.i = 0; this.i < this.businessApplicationModelDialog.users.length; this.i++) {
      this.businessApplicationModelDialog.users[this.i].applicationId = Number(localStorage.getItem('savedApplicationID'));
    }
    for (this.i = 0; this.i < this.businessApplicationModelDialog.businessApplicationQuestionAnswer.length; this.i++) {
      this.businessApplicationModelDialog.businessApplicationQuestionAnswer[this.i].applicationId = Number(localStorage.getItem('savedApplicationID'));
    }
    this.businessApplicationService.storeBusinessApplicationDetails(this.businessApplicationModelDialog).subscribe((data: any) => {
    })
    //console.log(this.businessApplicationModel);
    //console.log(this.businessApplicationModel.businessApplicationQuestionAnswer);
    this.openSnackBar();
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

