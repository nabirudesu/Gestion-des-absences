import { element } from 'protractor';
import { Students } from './../../const-students';
import { teacher } from './../../teacher';
import { Student } from './../../student';

import { user } from './../../user';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


import { admin } from 'src/admin';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  ngOnInit(): void {
    throw new Error("Method not implemented.");
  }
  public utilisateur : user ;
 
  
  constructor(private router: Router) {
  }
  
  loginauth() : boolean {

    return 
  }
  UserName: string;
  Password: string;
  wronguser : Boolean;
  onSubmituser() {
    return this.UserName;
  }
  onSubmitpass() {
    return this.Password;
  }
  onLoginClick() {
    if(this.isstudent())
    this.router.navigate(['student']);
    else if(this.isteacher())
    this.router.navigate(['teacher']);
    else if(this.isadmin())
    this.router.navigate(['admin']);
    else this.wronguser = true
  }
  
  isstudent() : Boolean {
    var s : Boolean = false;
    Students.forEach((element) =>{
      if (this.UserName === element.username && this.Password === element.password)
       s = true;

    })
    return s;
    
  }
  isteacher() : boolean {
    return (user)instanceof (teacher);
  }
  isadmin() : boolean {
    return (user)instanceof (admin);
  }
 
  
}
