import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignkpiComponent } from './assignkpi.component';

describe('AssignkpiComponent', () => {
  let component: AssignkpiComponent;
  let fixture: ComponentFixture<AssignkpiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AssignkpiComponent]
    });
    fixture = TestBed.createComponent(AssignkpiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
