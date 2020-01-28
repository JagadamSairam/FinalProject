import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserformComponent } from './forms/userform/userform.component';
import { HomeComponent } from './forms/home/home.component';
import {HttpClientModule} from '@angular/common/http';
import { AdduserComponent } from './forms/adduser/adduser.component';

@NgModule({
  declarations: [
    AppComponent,
    UserformComponent,
    HomeComponent,
    AdduserComponent
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
