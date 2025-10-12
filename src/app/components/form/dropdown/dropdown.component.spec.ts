import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TranslateModule } from '@ngx-translate/core';
import { DropdownComponent } from './dropdown.component';

describe('DropdownControlerComponent', () => {
  let component: DropdownComponent;
  let fixture: ComponentFixture<DropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DropdownComponent, TranslateModule.forRoot()],
    }).compileComponents();

    fixture = TestBed.createComponent(DropdownComponent);

    fixture.componentRef.setInput('options', ['Option 1', 'Option 2']);
    fixture.componentRef.setInput('prefix', 'testPrefix');

    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
