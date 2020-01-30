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
    AddcompanyComponent
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
