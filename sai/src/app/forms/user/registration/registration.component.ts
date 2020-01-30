import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup, Validators, FormBuilder} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  registerUser: FormGroup;

  constructor(private formBuilder :FormBuilder,private userService : ServiceService) { }

  ngOnInit() {
    this.registerUser = this.formBuilder.group({
      username: ['',Validators.required],
      password : ['',Validators.required],
      reenterpass: ['',Validators.required],
      contact :  ['',Validators.required],
      id : ['',Validators.required],
      email : ['',[Validators.required,Validators.email]],
      cemail : ['',[Validators.required,Validators.email]]
    });
   

}
  submit(){
    this.userService.saveUser(this.registerUser.value).subscribe(data=>{
      console.log("User Details are Entered Success fully");
      alert("Successfully ENtered New User");
    });
   }
  }

