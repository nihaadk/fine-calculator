import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowFineMessageComponent } from './show-fine-message.component';

describe('ShowFineMessageComponent', () => {
  let component: ShowFineMessageComponent;
  let fixture: ComponentFixture<ShowFineMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShowFineMessageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShowFineMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
