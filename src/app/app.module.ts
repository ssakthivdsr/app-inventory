import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
import { AddDeptDetailsComponent } from './component/dept/add-dept-details/add-dept-details.component';
import { AddApplicationDetailsComponent } from './component/application/add-application-details/add-application-details.component';
import { DeptComponent } from './component/dept/dept.component';
import { ApplicationComponent } from './component/application/application.component';
import { RegulatoryComponent } from './regulatory/regulatory.component';
import { ExpansionviewComponent } from './expansionview/expansionview.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AddDeptDetailsComponent,
    AddApplicationDetailsComponent,
    DeptComponent,
    ApplicationComponent,
    RegulatoryComponent,
    ExpansionviewComponent
  ],
  imports: [
    BrowserModule,
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
    MatExpansionModule,
    MatSelectModule,
    MatRadioModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
