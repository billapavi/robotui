import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: string;
  password: string;
  flag: boolean;

  // DependancyInjection through you can get the Router .
  // we use that injection to get the things..

  constructor(private router: Router) { 
    this.email='billa.pavi@gmail.com'
    this.password ='';
    this.flag = false;
  }
  
  ngOnInit() {
  }
 handleLogin()
 {
   if(this.email==="billa.pavi@gmail.com")
   {
     this.flag=false;
     // Redirect to welcome page
     this.router.navigate(['welcome',this.email]);
   }
   else{
     this.flag = true ;
   }
 }
}
