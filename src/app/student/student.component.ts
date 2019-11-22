import { Component, OnInit } from '@angular/core';
import { names} from '../../names'

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})

export class StudentComponent implements OnInit {
 Names = names;

  constructor() { }

  ngOnInit() {
  }

}
