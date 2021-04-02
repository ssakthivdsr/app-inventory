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

const routes: Routes = [
  { path: 'header' , component: HeaderComponent },
  { path: 'landingPage' , component: LandingPageComponent },
  { path: 'dept', component: DeptComponent },
  { path: 'application', component: ApplicationComponent },
  { path: 'regulatory' , component: RegulatoryComponent },
  { path: 'businesspartner' , component: BusinesspartnerComponent },
  { path: 'vendorpackage' , component: VendorpackageComponent },
  { path: 'expansionview' , component: ExpansionviewComponent },
  { path: 'applicationLifeCycle' , component: AddApplicationLifecycleDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
