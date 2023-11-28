import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RadioControlerComponent } from './radio-controler.component';

describe('RadioContolerComponent', () => {
  let component: RadioControlerComponent;
  let fixture: ComponentFixture<RadioControlerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RadioControlerComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(RadioControlerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
