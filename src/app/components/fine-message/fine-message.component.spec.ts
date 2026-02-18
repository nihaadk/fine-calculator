import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TranslateModule } from '@ngx-translate/core';
import { FineMessageComponent } from './fine-message.component';

describe('FineMessageComponent', () => {
  let component: FineMessageComponent;
  let fixture: ComponentFixture<FineMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FineMessageComponent, TranslateModule.forRoot()],
    }).compileComponents();

    fixture = TestBed.createComponent(FineMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
