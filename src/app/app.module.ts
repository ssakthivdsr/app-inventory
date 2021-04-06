import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './component/header/header.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule} from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatTabsModule } from '@angular/material/tabs';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule }  from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { AddDeptDetailsComponent } from './component/dept/add-dept-details/add-dept-details.component';
import { AddApplicationDetailsComponent } from './component/application/add-application-details/add-application-details.component';
import { DeptComponent } from './component/dept/dept.component';
import { ApplicationComponent } from './component/application/application.component';
import { RegulatoryComponent } from './regulatory/regulatory.component';
import { ExpansionviewComponent } from './expansionview/expansionview.component';
import { BusinesspartnerComponent } from './component/businesspartner/businesspartner.component';
import { VendorpackageComponent } from './component/vendorpackage/vendorpackage.component';
import { AddApplicationLifecycleDetailsComponent } from './component/applicationlifecycle/add-application-lifecycle-details/add-application-lifecycle-details.component';
import { LandingPageComponent } from './component/landing-page/landing-page.component';
import { AvailableApplicationsComponent } from './component/available-applications/available-applications.component';
import { ServicemanagementComponent } from './component/servicemanagement/servicemanagement.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AddDeptDetailsComponent,
    AddApplicationDetailsComponent,
    DeptComponent,
    ApplicationComponent,
    RegulatoryComponent,
    ExpansionviewComponent,
    BusinesspartnerComponent,
    VendorpackageComponent,
    AddApplicationLifecycleDetailsComponent,
    LandingPageComponent,
    AvailableApplicationsComponent,
    ServicemanagementComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule, 
    MatCheckboxModule,
    MatToolbarModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatTabsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatRadioModule,
    MatExpansionModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
