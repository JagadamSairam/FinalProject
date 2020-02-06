import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationComponent } from './forms/user/registration/registration.component';
import { HomeComponent } from './forms/home/home.component';
import { LoginComponent } from './forms/user/login/login.component';
import { UserhomeComponent } from './forms/user/userhome/userhome.component';
import { AdminhomeComponent } from './forms/admin/adminhome/adminhome.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UserslistComponent } from './userslist/userslist.component';
import { UpdateUserComponent } from './forms/admin/update-user/update-user.component';
import { AddcompanyComponent } from './forms/admin/addcompany/addcompany.component';
import { IpolistComponent } from './forms/admin/ipolist/ipolist.component';
import { CompanylistComponent } from './forms/admin/companylist/companylist.component';
import { UploadComponent } from './forms/admin/upload/upload.component';
import { SectorComponent } from './forms/admin/sector/sector.component';
import { MainlogComponent } from './mainlog/mainlog.component';
import { AdminloginComponent } from './forms/admin/adminlogin/adminlogin.component';
import { LogoutComponent } from './forms/logout/logout.component';
import { IpodetailsComponent } from './forms/admin/ipodetails/ipodetails.component';
import { ViewstockexchangeComponent } from './forms/admin/viewstockexchange/viewstockexchange.component';
import { UseripodetailsComponent } from './forms/user/useripodetails/useripodetails.component';
import { UpdateipoComponent } from './forms/admin/updateipo/updateipo.component';
import { ComparecompanyComponent } from './forms/user/comparecompany/comparecompany.component';
import { ComparesectorComponent } from './forms/user/comparesector/comparesector.component';
import { AddstockexchangeComponent } from './forms/admin/addstockexchange/addstockexchange.component';
// import { AddstockexchangeComponent } from './admin/addstockexchange/addstockexchange.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    HomeComponent,
    LoginComponent,
    UserhomeComponent,
    AdminhomeComponent,
    UserslistComponent,
    UpdateUserComponent,
    AddcompanyComponent,
    IpolistComponent,
    CompanylistComponent,
    UploadComponent,
    SectorComponent,
    MainlogComponent,
    AdminloginComponent,
    LogoutComponent,
    IpodetailsComponent,
    ViewstockexchangeComponent,
    UseripodetailsComponent,
    UpdateipoComponent,
    ComparecompanyComponent,
    ComparesectorComponent,
    AddstockexchangeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
