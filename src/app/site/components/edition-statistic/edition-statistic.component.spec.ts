import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditionStatisticComponent } from './edition-statistic.component';

describe('EditionStatisticComponent', () => {
  let component: EditionStatisticComponent;
  let fixture: ComponentFixture<EditionStatisticComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditionStatisticComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditionStatisticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
