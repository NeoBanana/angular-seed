import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDaneKomitetuComponent } from './admin-dane-komitetu.component';

describe('AdminDaneKomitetuComponent', () => {
  let component: AdminDaneKomitetuComponent;
  let fixture: ComponentFixture<AdminDaneKomitetuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminDaneKomitetuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminDaneKomitetuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
