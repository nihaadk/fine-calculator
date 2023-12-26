import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeasureMessageComponent } from './measure-message.component';

describe('MeasureMessageComponent', () => {
  let component: MeasureMessageComponent;
  let fixture: ComponentFixture<MeasureMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MeasureMessageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MeasureMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
