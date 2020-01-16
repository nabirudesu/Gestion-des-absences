import { Injectable } from '@angular/core';
import { CanActivate,
         ActivatedRouteSnapshot,
         RouterStateSnapshot, 
         Router,
         NavigationStart,
         ActivatedRoute,
        } from '@angular/router';

         


import { LoginService } from '../login/login.service';



@Injectable()
export class CanActivateRouteGuardTeacher implements CanActivate {
  
  
  user = JSON.parse(localStorage.getItem("user"))
  navigatedurl = localStorage.getItem("navigatedurl")
  constructor(private auth: LoginService  ,private router:Router , private activatedRoute: ActivatedRoute) {
  
  }
  
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    console.log(this.navigatedurl);
    console.log(this.user);
    console.log('/Teacher/Students/'+btoa(this.user.username))
    
    
    
  
      
      if (( localStorage.getItem("user") !== null)&&( localStorage.getItem("is_teacher") == "true")&&((state.url == '/Teacher/Mail/'+btoa(this.user.username).replace("=", "%3D"))||(state.url == '/Teacher/Students/'+btoa(this.user.username).replace("=", "%3D")))){
        return true
      } 
      else
      return false
       
  }
}