import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup} from '@angular/forms';
import { UserservicesService } from 'src/app/services/userservices.service';
import { User } from 'src/app/models/user';
import { Router } from '@angular/router';
@Component({
  selector: 'app-userform',
  templateUrl: './userform.component.html',
  styleUrls: ['./userform.component.css']
})
export class UserformComponent implements OnInit {
  signupForm: FormGroup;
  constructor(private userService : UserservicesService,private router: Router) { }
  users:User[];
 ngOnInit() {
  //   this.signupForm = new FormGroup({
  //     'username': new FormControl(''),
  //     'password': new FormControl('')
      
         //this.users=this.userService.getAllUsers();
         this.userService.getAllUsers().subscribe(data => {
           this.users=data;
         });
      }
      deleteUser(user:User){
        this.userService.deleteUser(user.id).subscribe();
        this.users=this.users.filter(u=> u !== user)
      }
      update(user:User){

        localStorage.removeItem("userID");
        localStorage.setItem("userID",user.id.toString());
        this.router.navigate(['update-user']);
        
      }
  }


