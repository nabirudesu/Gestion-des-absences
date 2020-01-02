import { Injectable } from '@angular/core';
import * as $ from 'jquery';
@Injectable({
  providedIn: 'root'
})
export class TeacherService {

  constructor() { }
  get_justification(data ,accesstoken): any{

    $.ajax({
      url : "http://127.0.0.1:8000/api/Justification/",
      method :'GET',
      async: false ,
      data : data,
      headers :{
        "authorization" : `token ${accesstoken}` 
        },
     
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
  delete_justification(accesstoken , data){
    $.ajax({
      url : data,
      method :'DELETE',
      async: false ,
      headers :{
        "authorization" : `token ${accesstoken}` 
        },
        success:function(response){
          
          console.log(response)
          
        },
        error:function(err){
          console.log(err)      
        }  

    })
  }
  confirm_justification(accesstoken , data ){
    $.ajax({
      url : data.url,
      method :'PUT',
      async: false ,
      data : {'username': data.username , 'email' : data.email , 'fullName':data.fullName , 'absences' : data.absences - 1},
      headers :{
        "authorization" : `token ${accesstoken}` 
        },
        success:function(response){
          
          console.log(response)
          
        },
        error:function(err){
          console.log(err)      
        }  

    })
  }
  get_students(accesstoken , url): any{
    
    let data
    $.ajax({
      url : url,
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
