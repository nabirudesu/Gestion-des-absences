import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';


import { StudentComponent } from './student.component';

@Injectable()
export class CanActivateRouteGuard implements CanDeactivate<StudentComponent> {
  canDeactivate(component: StudentComponent): boolean {
    
    return true;
  }
}