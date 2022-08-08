import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminViewBookDetailComponent } from './admin-view-book-detail.component';

describe('AdminViewBookDetailComponent', () => {
  let component: AdminViewBookDetailComponent;
  let fixture: ComponentFixture<AdminViewBookDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminViewBookDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminViewBookDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
