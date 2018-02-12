import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolAddParticipentComponent } from './school-add-participent.component';

describe('SchoolAddParticipentComponent', () => {
  let component: SchoolAddParticipentComponent;
  let fixture: ComponentFixture<SchoolAddParticipentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchoolAddParticipentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchoolAddParticipentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
