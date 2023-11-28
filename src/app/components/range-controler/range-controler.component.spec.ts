import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RangeControlerComponent } from './range-contoler.component';

describe('RangeContolerComponent', () => {
  let component: RangeControlerComponent;
  let fixture: ComponentFixture<RangeControlerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RangeControlerComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(RangeControlerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
