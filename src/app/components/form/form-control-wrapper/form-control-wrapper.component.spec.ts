import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormControlWrapperComponent } from './form-control-wrapper.component';

describe('FormControlWrapperComponent', () => {
  let component: FormControlWrapperComponent;
  let fixture: ComponentFixture<FormControlWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormControlWrapperComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FormControlWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
