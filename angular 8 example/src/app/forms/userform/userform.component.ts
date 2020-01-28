import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup} from '@angular/forms';
import { UserservicesService } from 'src/app/services/userservices.service';
import { User } from 'src/app/models/user';
@Component({
  selector: 'app-userform',
  templateUrl: './userform.component.html',
  styleUrls: ['./userform.component.css']
})
export class UserformComponent implements OnInit {
  signupForm: FormGroup;
  constructor(private userService : UserservicesService) { }
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
  }


