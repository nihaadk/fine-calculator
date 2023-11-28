import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FineFormComponent } from './fine-form.component';

describe('FineFormComponent', () => {
  let component: FineFormComponent;
  let fixture: ComponentFixture<FineFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FineFormComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FineFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
