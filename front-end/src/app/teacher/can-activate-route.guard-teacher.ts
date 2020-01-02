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
  
      
      if (( localStorage.getItem("user") !== null)&&( localStorage.getItem("is_teacher") == "true")&&(state.url == this.navigatedurl)){
        return true
      } 
      else
      return false
       
  }
}