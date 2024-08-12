import { ComponentFixture, TestBed } from '@angular/core/testing';

import { McoComponent } from './mco.component';

describe('McoComponent', () => {
  let component: McoComponent;
  let fixture: ComponentFixture<McoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [McoComponent]
    });
    fixture = TestBed.createComponent(McoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
