import { Injectable } from '@angular/core';
import * as $ from 'jquery';

@Injectable({
  providedIn: 'root'
})
export class TeacherabsencesService {

  constructor() { }
  get_Students(accesstoken ): any{
    
    let data
    $.ajax({
      url : 'http://127.0.0.1:8000/api/Student/',
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
  confirm_absences(accesstoken , data ){
    $.ajax({
      url : data.url,
      method :'PUT',
      async: false ,
      data : {'email' : data.email ,'absences' : data.absences+1},
      headers :{
        "authorization" : `token ${accesstoken}` 
        },
        success:function(response){
          
      
          
        },
        error:function(err){
          console.log(err)      
        }  

    })
  }
}
