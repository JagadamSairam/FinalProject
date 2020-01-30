import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './forms/home/home.component';
import { RegistrationComponent } from './forms/user/registration/registration.component';
import { LoginComponent } from './forms/user/login/login.component';
import { UserhomeComponent } from './forms/user/userhome/userhome.component';
import { UserslistComponent } from './userslist/userslist.component';
import { UpdateUserComponent } from './forms/admin/update-user/update-user.component';
import { User } from 'src/modals/user';

import { AddcompanyComponent } from './forms/admin/addcompany/addcompany.component';


const routes: Routes = [
  {path : '', component : HomeComponent},
  {path : 'login' , component : LoginComponent},
  {path : 'registration', component: RegistrationComponent},
  {path : 'userhome' , component : UserhomeComponent},
  {path : 'userslist',component : UserslistComponent},
  {path : 'update-user', component:UpdateUserComponent},
  {path : "addcompany", component:AddcompanyComponent}
];
  
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
