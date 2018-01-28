import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditionResultComponent } from './edition-result.component';

describe('EditionResultComponent', () => {
  let component: EditionResultComponent;
  let fixture: ComponentFixture<EditionResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditionResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditionResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
