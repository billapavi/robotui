import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user/user.service';
import { User } from '../user/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user: User = new User();
  constructor(private router: Router,private userService: UserService) { }

  ngOnInit() {
  }
  createUsers(): void{
    console.log("mehod called..")
    this.userService.createUser(this.user).subscribe(data=>{
      alert("user Created successfully..")
    })
  }
}
