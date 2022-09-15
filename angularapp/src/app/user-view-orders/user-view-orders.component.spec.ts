import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserViewOrdersComponent } from './user-view-orders.component';

describe('UserViewOrdersComponent', () => {
  let component: UserViewOrdersComponent;
  let fixture: ComponentFixture<UserViewOrdersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserViewOrdersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserViewOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
