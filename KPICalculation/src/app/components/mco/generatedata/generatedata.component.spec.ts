import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneratedataComponent } from './generatedata.component';

describe('GeneratedataComponent', () => {
  let component: GeneratedataComponent;
  let fixture: ComponentFixture<GeneratedataComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GeneratedataComponent]
    });
    fixture = TestBed.createComponent(GeneratedataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
