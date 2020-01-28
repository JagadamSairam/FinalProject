import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup, Validators, FormBuilder} from '@angular/forms';
import { ServiceService } from 'src/app/services/service.service';
import { LoginDetails } from 'src/app/modals/logindetails';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  signupForm: FormGroup;
  constructor(private formBuilder :FormBuilder, private userService:ServiceService) { }

 
    
  ngOnInit() {
    this.signupForm=this.formBuilder.group({
      username : ['',Validators.required],
      password : ['', Validators.required],
      remember: ['true',Validators.required]
    
    });
  }
    addUsers(){
      this.userService.saveUser(this.signupForm.value).subscribe(data=>{
        console.log('User Inserted SuccessFully');
        alert('User Inserted SuccessFully');
         
        alert(this.signupForm.value);
      });
    
    }
    login()
    {
      
    }
  }
