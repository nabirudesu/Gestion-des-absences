import { Injectable } from '@angular/core';
import * as $ from 'jquery'

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor() { }
  
  send_justification(data , accesstoken) {
   
    $.ajax({
      url : "http://127.0.0.1:8000/api/Justification/" ,
      method : "POST",
      async : false,
      data : data,
      processData: false,
      contentType: false,
     
     
      success:function(response){
        console.log(response);
        
      }, 
      error:function(error){
        console.log(error);
        
      }
    })
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
        console.log(data)
        
      },
      error:function(err){
        console.log(err)      
      }
    })
    return data
  }
}
