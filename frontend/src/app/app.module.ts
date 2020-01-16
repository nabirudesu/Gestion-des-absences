
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { StudentComponent } from './student/student.component';
import { TeacherComponent } from './teacher/teacher.component';

import { RouterModule, Routes } from '@angular/router';
import { LoginService } from './login/login.service';
import { CanActivateRouteGuard } from './student/can-activate-route.guard';
import {CookieService} from 'ngx-cookie-service'
import { CanActivateRouteGuardTeacher } from './teacher/can-activate-route.guard-teacher';
import { StudentService } from './student/student.service';
import { TeacherabsencesComponent } from './teacherabsences/teacherabsences.component';

const AppRoutes: Routes = [
  { path: '' , redirectTo : 'Login' , pathMatch: 'full'},
  { path: 'Login', component: LoginComponent},
  { path: 'Student/:username',     
   component: StudentComponent ,
   canActivate: [CanActivateRouteGuard] },
  { path: 'Teacher/Mail/:username', 
   component: TeacherComponent ,
   canActivate: [CanActivateRouteGuardTeacher]},
   { path: 'Teacher/Students/:username', 
   component: TeacherabsencesComponent ,
   canActivate: [CanActivateRouteGuardTeacher]},
  
  
  
];


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    StudentComponent,
    TeacherComponent, 
    TeacherabsencesComponent   
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
  providers: [LoginService ,
              CanActivateRouteGuard,
              CanActivateRouteGuardTeacher,
              StudentService,],
  bootstrap: [AppComponent]
})
export class AppModule { }
