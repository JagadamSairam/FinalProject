import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './forms/home/home.component';
import { LoginComponent } from './forms/user/login/login.component';
import { RegistrationComponent } from './forms/user/registration/registration.component';
import { AdminhomeComponent } from './forms/admin/adminhome/adminhome.component';


const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:'login', component:LoginComponent},
  {path : 'registration', component : RegistrationComponent},
  {path:'adminhome' , component:AdminhomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
