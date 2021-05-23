import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApplicationComponent } from './component/application/application.component';
import { DeptComponent } from './component/dept/dept.component';
import { ExpansionviewComponent } from './expansionview/expansionview.component';
import { RegulatoryComponent } from './regulatory/regulatory.component';
import { BusinesspartnerComponent} from './component/businesspartner/businesspartner.component';
import { VendorpackageComponent} from './component/vendorpackage/vendorpackage.component';
import { AddApplicationLifecycleDetailsComponent } from './component/applicationlifecycle/add-application-lifecycle-details/add-application-lifecycle-details.component';
import { LandingPageComponent } from './component/landing-page/landing-page.component';
import { HeaderComponent } from './component/header/header.component';
import { AvailableApplicationsComponent } from './component/available-applications/available-applications.component';
import { ServicemanagementComponent} from './component/servicemanagement/servicemanagement.component';
import { BusinessapplicationdetailsComponent} from './component/businessapplicationdetails/businessapplicationdetails.component'
import { ReportsComponent } from './component/reports/reports.component';
import { LayoutComponent } from './component/layout/layout.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { EditApplicationComponent } from './component/edit-application/edit-application.component';
import { NewApplicationComponent } from './component/new-application/new-application.component';
import { AvailableDepartmentsComponent} from './component/available-departments/available-departments.component';
import { EditApplicationlifecycleComponent } from './component/edit-applicationlifecycle/edit-applicationlifecycle.component';
const routes: Routes = [
  { path: 'header' , component: HeaderComponent,
      children: [
        { path: 'application', component: ApplicationComponent },
        { path: 'regulatory' , component: RegulatoryComponent },
        { path: 'businesspartner' , component: BusinesspartnerComponent },
        { path: 'vendorpackage' , component: VendorpackageComponent },
        { path: 'applicationLifeCycle' , component: AddApplicationLifecycleDetailsComponent },
        { path: 'servviceManagement' , component: ServicemanagementComponent},
        { path: 'businessAppDetails' , component: BusinessapplicationdetailsComponent}
      ]
  },
  { path: 'landingPage' , component: LandingPageComponent },
  { path: 'expansionview' , component: ExpansionviewComponent },
  { path: 'layout', component: LayoutComponent,
      children: [
        { path: 'availableApplications' , component: AvailableApplicationsComponent },
        { path: 'newApplication' , component: NewApplicationComponent },
        { path: 'editApplication' , component: EditApplicationComponent },
        { path: 'dashboard', component: DashboardComponent },
        { path: 'reports', component: ReportsComponent },
        { path: 'availabledepartments', component: AvailableDepartmentsComponent},
        { path: 'newdepartment', component: DeptComponent  }
      ]
  } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
