import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApplicationComponent } from './component/application/application.component';
import { DeptComponent } from './component/dept/dept.component';
import { RegulatoryComponent } from './regulatory/regulatory.component';
import { ExpansionviewComponent } from './expansionview/expansionview.component'

const routes: Routes = [
  { path: 'dept', component: DeptComponent },
  { path: 'application', component: ApplicationComponent },
  { path: 'regulatory' , component: RegulatoryComponent },
  { path: 'expansionview' , component: ExpansionviewComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
