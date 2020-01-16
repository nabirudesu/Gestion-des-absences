import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherabsencesComponent } from './teacherabsences.component';

describe('TeacherabsencesComponent', () => {
  let component: TeacherabsencesComponent;
  let fixture: ComponentFixture<TeacherabsencesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeacherabsencesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherabsencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
