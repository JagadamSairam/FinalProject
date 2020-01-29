import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserservicesService } from 'src/app/services/userservices.service';
import { User } from 'src/app/models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {
  update : FormGroup;
  constructor(private formBuilder : FormBuilder,private userService : UserservicesService,private router:Router) { }

  ngOnInit() {
    this.update=this.formBuilder.group({
      id:[],
      name :['', Validators.required],
      email :['', [Validators.required,Validators.email]],
      phone : ['', Validators.required]
        });
        const id = localStorage.getItem('userID');
        if(+id>0){
          this.userService.getUserById(+id).subscribe(user => {
            this.update.patchValue(user);
          });
        }
      }
        updateTheUser(user:User){
          this.userService.update(this.update.value).subscribe( u =>{
            this.router.navigate(['user']);
          })
        }
  }

