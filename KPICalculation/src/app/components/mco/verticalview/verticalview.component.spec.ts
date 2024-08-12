import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerticalviewComponent } from './verticalview.component';

describe('VerticalviewComponent', () => {
  let component: VerticalviewComponent;
  let fixture: ComponentFixture<VerticalviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VerticalviewComponent]
    });
    fixture = TestBed.createComponent(VerticalviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
