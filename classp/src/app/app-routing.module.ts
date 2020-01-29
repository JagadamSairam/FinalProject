import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserformComponent } from './forms/userform/userform.component';
import { HomeComponent } from './forms/home/home.component';
import { AdduserComponent } from './forms/adduser/adduser.component';
import { UpdateUserComponent } from './user/update-user/update-user.component';


const routes: Routes = [
  {path : '', component:HomeComponent },
  {path: 'userform', component : UserformComponent},
  {path : "adduser", component:AdduserComponent},
  {path : "update-user",component: UpdateUserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
