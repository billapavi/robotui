import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService, mycustomclass } from '../user/user.service';
import { User } from '../user/user';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user: User = new User();
  public userForm :FormGroup;
  public summaryForm :FormGroup;
  constructor(private router: Router,private userService: UserService,private fb :FormBuilder,private summarycustome:mycustomclass) {
    
   }

  ngOnInit() {
    this.userForm = this.fb.group({
      firstname : new FormControl(''),
      lastname : new FormControl(''),
      password : new FormControl(''),
      cpassword : new FormControl(''),
      email : new FormControl(''),
      apikey : new FormControl(''),
      seckey : new FormControl(''),
      gender : new FormControl(''),
      phone : new FormControl(''),
      answer : new FormControl(''),
      
    });
    this.summaryForm = this.fb.group({
      gd : new FormControl(""),
      gp : new FormControl(""),
      tg : new FormControl(""),
      tl : new FormControl(""),
    })
  }
  createUsers(): void{
    console.log("mehod called..")
    console.log(JSON.stringify(this.userForm.value))
    console.log(this.userForm.controls.firstname.value)
    this.user.firstName = this.userForm.controls.firstname.value;
    this.user.lastName = this.userForm.controls.lastname.value;
    this.user.email = this.userForm.controls.email.value;
    this.user.password = this.userForm.controls.password.value;
    this.user.gender = this.userForm.controls.gender.value;
    this.user.phone = this.userForm.controls.phone.value;
    // this.user.firstName = this.userForm.controls.firstname.value;
    this.userService.createUser(this.user).subscribe(data=>{
      alert("user Created successfully..")
    })
  }
  getSummary(): void{
    console.log('getsummary called..')
    this.userService.summaryDetails().subscribe(data=>{
      console.log(data.gd)
      
      alert("summary Created successfully.."+data.gd)
    })
  }
}
