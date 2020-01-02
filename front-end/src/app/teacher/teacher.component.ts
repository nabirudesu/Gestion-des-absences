
import { Component, OnInit } from '@angular/core';
import { Student } from '../../student'
import { TeacherService } from './teacher.service';


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


  constructor(private api:TeacherService) { }

  ngOnInit() {
    this.token = localStorage.getItem('token')
    let data ={ 'teacher': JSON.parse(localStorage.getItem('user')).url }
    this.Justifications = this.api.get_justification(data ,this.token )
    this.Justifications.forEach(element => { 
      if(element.teacher ==JSON.parse(localStorage.getItem('user')).url){
      this.STUDENTS.push(this.api.get_students(this.token ,element.student))      
      console.log(this.api.get_students(this.token ,element.student));
      }
    });
    console.log(this.STUDENTS);
    
  }

  onSelect(stud) : boolean  {
    this.selectedstudent = stud ;
    this.Justifications.forEach(element => {
      if(element.student == this.selectedstudent.url){
        this.selectedjustification = element
        console.log(this.selectedjustification.image);
        
        console.log(this.selectedjustification);
        
      }
    });
    return true;
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


