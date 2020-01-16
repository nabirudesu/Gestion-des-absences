import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart, NavigationCancel } from '@angular/router';
import { StudentService } from './student.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})

export class StudentComponent implements OnInit {
  studentuser;
  Teacher ;
  Cause ;
  selectedimage;
  Teachers;
  
  constructor(private router:Router , private api:StudentService) {    
  }
  onFileChanged(event : any) {
    this.selectedimage = event.target.files[0]
  }

  ngOnInit() { 
    let token = localStorage.getItem('token')
    this.Teachers = this.api.get_teachers(token)      
    console.log(this.Teachers);
    this.Teachers.forEach(element => {
      console.log(element.fullName)      
    });
    this.studentuser = JSON.parse(localStorage.getItem('user')).fullName    
  }
  
  OnLogoutClick(){
    this.router.navigate([''])
  }
  onSentClick(){

    let conf = window.confirm("You want to send the justification ?")
    if (conf){
    
    let teach
    this.Teachers.forEach(element => {
     if( element.fullName = this.Teacher)
     teach = element
    });
    const uploaddata = new FormData
    uploaddata.append('student' ,JSON.parse(localStorage.getItem('user')).url )  
    uploaddata.append( "teacher" , teach.url)  
    uploaddata.append("cause" , this.Cause)
    uploaddata.append("image" , this.selectedimage )

      
    this.api.send_justification(uploaddata,localStorage.getItem('token'))
  }
}
  

}
