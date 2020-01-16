import { Injectable } from '@angular/core';
import { CanActivate,
         ActivatedRouteSnapshot,
         RouterStateSnapshot, 
         Router,
         NavigationStart,
        } from '@angular/router';

         


import { LoginService } from '../login/login.service';



@Injectable()
export class CanActivateRouteGuard implements CanActivate {
  
  user = JSON.parse(localStorage.getItem("user"))
  navigatedurl = localStorage.getItem("navigatedurl")

  constructor(private auth: LoginService  ,private router:Router) {
    
  }
  
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    
      
      
      return (( localStorage.getItem("user") !== null)&&( localStorage.getItem("is_student") == "true")&&(state.url == '/Student/'+btoa(this.user.username).replace("=", "%3D")))
       
  }
}