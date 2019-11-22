import { names } from './../names';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { StudentComponent } from './student/student.component';
import { TeacherComponent } from './teacher/teacher.component';
import { AdminComponent } from './admin/admin.component';
import { RouterModule, Routes } from '@angular/router';





const AppRoutes: Routes = [
  { path: '', component: LoginComponent},
  { path: 'admin', component: AdminComponent},
  { path: 'student',      component: StudentComponent },
  { path: 'teacher',      component: TeacherComponent },
  
  
  
];


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    StudentComponent,
    TeacherComponent,
    AdminComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    
   
    RouterModule.forRoot(
     
      AppRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
