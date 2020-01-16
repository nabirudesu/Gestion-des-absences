
import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { TeacherService } from './teacher.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})
export class TeacherComponent implements OnInit {
  STUDENTS = [];
  selectedjustification;
  selectedstudent ;
  Justifications  ;
  token ;
  teacheruser;


  constructor(private api:TeacherService , private router:Router) { }

  ngOnInit() {
    
    this.token = localStorage.getItem('token')
    let data ={ 'teacher': JSON.parse(localStorage.getItem('user')).url }
    this.Justifications = this.api.get_justification(data ,this.token )
    console.log(this.Justifications);
    
    this.Justifications.forEach(element => { 
      if(element.teacher ==JSON.parse(localStorage.getItem('user')).url){
        console.log(element);
        

      data = Object.assign({},this.api.get_students(this.token ,element.student), element)
      this.STUDENTS.push(data)      
      
      
      
    
      }
    });
    console.log(this.STUDENTS);
    

    this.teacheruser = JSON.parse(localStorage.getItem('user')).fullName
  }

  onSelect(stud) : boolean  {
    this.selectedstudent = stud ;
    this.selectedjustification = {cause: this.selectedstudent.cause,
    date: this.selectedstudent.date,
    image: this.selectedstudent.image,
    student: this.selectedstudent.student,
    teacher: this.selectedstudent.teacher,}
       
        
      
   
    return true;
  }
  Students(){
    let user = JSON.parse(localStorage.getItem('user'))
    this.router.navigate([`Teacher/Students/`+btoa(user.username)])
  }
  OnDelete(){
    let conf = window.confirm("You want to delete the justification ?")
    if (conf){
    this.api.delete_justification(this.token ,this.selectedjustification.url)
  }
  }
  OnConfirm(){
    let conf = window.confirm("You want to confirm the justification ?")
    if (conf){
      
      this.api.confirm_justification(this.token , this.selectedstudent)
    this.api.delete_justification(this.token ,this.selectedjustification.url)

  }
  }
}


