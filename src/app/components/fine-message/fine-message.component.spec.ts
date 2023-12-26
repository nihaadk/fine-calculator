import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FineMessageComponent } from './fine-message.component';

describe('FineMessageComponent', () => {
  let component: FineMessageComponent;
  let fixture: ComponentFixture<FineMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FineMessageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FineMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
