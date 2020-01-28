import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ServiceService } from 'src/app/services/service.service';
import { LoginDetails } from 'src/app/modals/logindetails';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {

  
  signupForm: FormGroup;
  constructor(private userService : ServiceService) { }

  users:LoginDetails[];
    
  ngOnInit() {
    this.userService.getAllUsers().subscribe(data => {
      this.users=data;
    });
  }
    // deleteUser(user:LoginDetails){
    //   this.userService.deleteUser(user.id).subscribe();
    //   this.users=this.users.filter(u=> u !== user)
    // }

}
