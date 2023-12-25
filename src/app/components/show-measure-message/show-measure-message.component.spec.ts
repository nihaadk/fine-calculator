import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowMeasureMessageComponent } from './show-measure-message.component';

describe('ShowMeasureMessageComponent', () => {
  let component: ShowMeasureMessageComponent;
  let fixture: ComponentFixture<ShowMeasureMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShowMeasureMessageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShowMeasureMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
