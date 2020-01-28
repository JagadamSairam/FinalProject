import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserservicesService } from 'src/app/services/userservices.service';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {
  addUser : FormGroup;
  constructor(private formBuilder :FormBuilder,private userService:UserservicesService) { }

  ngOnInit() {
    this.addUser=this.formBuilder.group({
      id : ['',Validators.required],
      name : ['', Validators.required],
      email : ['', [Validators.required,Validators.email]],
      phone : ['', Validators.required]
    });
  }

  addUsers(){
    this.userService.saveUser(this.addUser.value).subscribe(data=>{
      console.log('User Inserted SuccessFully');
      alert('User Inserted SuccessFully');
       
      alert(this.addUser.value);
    });
  }
  onSubmit()
{
console.log(this.addUser.value);
}
}
