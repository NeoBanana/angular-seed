import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolSettingComponent } from './school-setting.component';

describe('SchoolSettingComponent', () => {
  let component: SchoolSettingComponent;
  let fixture: ComponentFixture<SchoolSettingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchoolSettingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchoolSettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
