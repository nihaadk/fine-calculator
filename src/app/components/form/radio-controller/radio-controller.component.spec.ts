import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TranslateModule } from '@ngx-translate/core';
import { RadioControlerComponent } from './radio-controller.component';

describe('RadioControllerComponent', () => {
  let component: RadioControlerComponent;
  let fixture: ComponentFixture<RadioControlerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RadioControlerComponent, TranslateModule.forRoot()],
    }).compileComponents();

    fixture = TestBed.createComponent(RadioControlerComponent);
    
    fixture.componentRef.setInput('id', 'test-radio');
    fixture.componentRef.setInput('name', 'test-radio-name');
    fixture.componentRef.setInput('options', ['Option 1', 'Option 2', 'Option 3']);
    fixture.componentRef.setInput('translatePrefix', 'test.prefix.');

    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
