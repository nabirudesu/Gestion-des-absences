import { Students } from '../../const-students';
import { Component, OnInit } from '@angular/core';
import { Student } from '../../student'


@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})
export class TeacherComponent implements OnInit {
  student : Student ;

  selectedstudent : Student;
  STUDENTS = Students ;


  constructor() { }

  ngOnInit() {
  }

  onSelect(stud : Student) : void  {
    this.selectedstudent = stud ;

  }
  
}


