import { Injectable } from '@angular/core';
import * as $ from 'jquery';


@Injectable({
  providedIn: 'root'
})
export class LoginService {
  

  constructor() { 
    
  }
  Token ;
  Student ;
  autheticated = false;
  Isautheticated( ) : any {
    return this.autheticated
  }

  
  get_token(user , password) : any{
    let usertoken
    let userauth
    let userdata = {'username': user,
    'password': password}
    $.ajax({
      url :"http://127.0.0.1:8000/auth/",
      method :'POST',
    
      data : JSON.stringify(userdata),
      async: false ,
      contentType: 'application/json',
      success:function(response){
        usertoken = response.token
        userauth= true        
                
      },
      error:function(err){
        console.log(err)
        return err
    
        
      }
    });
    this.autheticated = userauth
    console.log(this.autheticated);
    
    return usertoken
  }
  get_teachers(accesstoken): any{

    let data
    $.ajax({
      url : "http://127.0.0.1:8000/api/Teacher/",
      method :'GET',
      async: false ,
      headers :{
        "authorization" : `token ${accesstoken}` 
        },
      
      contentType: 'application/json',
      success:function(response){
        data = response 
        
      },
      error:function(err){
        console.log(err)      
      }
    })
    return data
  }
  get_students(accesstoken): any{
    let data
    $.ajax({
      url : "http://127.0.0.1:8000/api/Student/",
      method :'GET',
      async: false ,
      headers :{
        "authorization" : `token ${accesstoken}` 
        },
     
      contentType: 'application/json',
      success:function(response){
        data = response 
      
        
      },
      error:function(err){
        console.log(err)      
      }
    })
    return data
  }
  Login_from(accesstoken) :any {
    let data
    $.ajax({
      url : "http://127.0.0.1:8000/api/User/",
      method :'GET',
      async: false ,
      headers :{
      "authorization" : `token ${accesstoken}` 
      },
      contentType: 'application/json',
      success:function(response){
        data = response 
    
        
      },
      error:function(err){
        console.log(err)      
      }
    })
    return data
  }   
    
}
