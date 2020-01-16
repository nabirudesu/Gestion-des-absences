




import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';


import { admin } from 'src/admin';
import { LoginService } from './login.service';
import { Subscription } from 'rxjs';
import { Student } from 'src/student';
export var Isauthenticated = false
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{


 
  
  constructor(private router: Router ,private login:LoginService) {
    
  }
  ngOnInit(){
    localStorage.clear()
  }
  
  
  UserName: string;
  Password: string;
  wronguser : Boolean;
  
  
  onLoginClick() {  
    let token = this.login.get_token(this.UserName , this.Password)
    localStorage.setItem('token' , token)
    let Isauthenticated = false
    let students = this.login.get_students(token)
    let teachers = this.login.get_teachers(token)
    let auth = this.login.Login_from(token)
    auth.forEach(element => { if(element.username == this.UserName){
      Isauthenticated =true
       
     
      students.forEach(Student => { if(Student.username == this.UserName){
      localStorage.setItem("user" , JSON.stringify(Student)) 
      localStorage.setItem("is_student" , 'true' )  
      this.router.navigate(['Student' ,  btoa(this.UserName)]) 
      }
      });
      teachers.forEach(Teacher => { if(Teacher.username == this.UserName){
        localStorage.setItem("user" , JSON.stringify(Teacher)) 
        localStorage.setItem("is_teacher" , 'true' )  
        
      this.router.navigate(['Teacher/Mail' , btoa(this.UserName)]) 
      }
      });
      
       let user =  localStorage.getItem("url")
  
    }
      
    });
    if(!Isauthenticated){
      this.wronguser =true
    }
    
    
    
    
  }
  
}
