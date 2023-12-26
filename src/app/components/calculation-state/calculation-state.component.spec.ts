import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculationStateComponent } from './calculation-state.component';

describe('CalculationStateComponent', () => {
  let component: CalculationStateComponent;
  let fixture: ComponentFixture<CalculationStateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CalculationStateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CalculationStateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
