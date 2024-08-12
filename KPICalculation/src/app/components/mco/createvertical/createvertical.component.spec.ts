import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateverticalComponent } from './createvertical.component';

describe('CreateverticalComponent', () => {
  let component: CreateverticalComponent;
  let fixture: ComponentFixture<CreateverticalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateverticalComponent]
    });
    fixture = TestBed.createComponent(CreateverticalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
