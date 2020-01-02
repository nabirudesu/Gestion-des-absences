




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
  
  
  onLoginClick() {  this.router.events.subscribe((event) => {
    if(event instanceof NavigationStart){
      localStorage.setItem('navigatedurl' , event.url)
    }
  });
    let token = this.login.get_token(this.UserName , this.Password)
    localStorage.setItem('token' , token)
    console.log(token);
    let students = this.login.get_students(token)
    let teachers = this.login.get_teachers(token)
    let auth = this.login.Login_from(token)
    auth.forEach(element => { if(element.username == this.UserName){
      Isauthenticated = true
       
     
      students.forEach(Student => { if(Student.username == this.UserName){
      localStorage.setItem("user" , JSON.stringify(Student)) 
      localStorage.setItem("is_student" , 'true' )  
      localStorage.setItem("url" , `/Student/${btoa(String(element.id))+btoa(this.UserName)}`)
      this.router.navigate(['Student' ,  btoa(String(element.id))+btoa(this.UserName)]) 
      }
      });
      teachers.forEach(Teacher => { if(Teacher.username == this.UserName){
        localStorage.setItem("user" , JSON.stringify(Teacher)) 
        localStorage.setItem("is_teacher" , 'true' )  
        localStorage.setItem("url" , `/Teacher/${btoa(String(element.id))+btoa(this.UserName)}`)
      this.router.navigate(['Teacher' , btoa(String(element.id))+btoa(this.UserName)]) 
      }
      });
      if((localStorage.getItem("is_student")!= 'true')&&(localStorage.getItem("is_teacher")!= 'true')){
        localStorage.setItem("user" , JSON.stringify(element)) 
        this.router.navigate(['Admin'])  
      }
       let user =  localStorage.getItem("url")
      console.log(user);
      
      
      
    }
      
    });
    
    
    
    
  }
  
}
