import { Component, OnInit } from '@angular/core';
import { TeacherService } from 'front-end/src/app/teacher/teacher.service';
import { Router } from '@angular/router';
import { TeacherabsencesService } from './teacherabsences.service';

@Component({
  selector: 'app-teacherabsences',
  templateUrl: './teacherabsences.component.html',
  styleUrls: ['./teacherabsences.component.css']
})
export class TeacherabsencesComponent implements OnInit {
  STUDENTS= [];
  teacheruser 

  
  constructor(private api:TeacherabsencesService , private router:Router) { }

  ngOnInit() {
    this.teacheruser = JSON.parse(localStorage.getItem('user')).fullName
    let token = localStorage.getItem('token')
    let students = this.api.get_Students('token')
    students.forEach(element => {
      element['present']= true
      this.STUDENTS.push(element)
    });
  
    
  }
  Students(){
    let user = JSON.parse(localStorage.getItem('user'))
    this.router.navigate([`Teacher/Mail/`+btoa(user.username)])
  }
  OnConfirm(){
    let conf = window.confirm("You want to confirm the justification ?")
    if (conf){
    
    this.STUDENTS.forEach(element => {
     if (element.present == false ){
       this.api.confirm_absences(localStorage.getItem('token'),element)

     }
    })
    

  }
  }
}
