import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToggleThemeButtonComponent } from './toggle-theme-button.component';

describe('ToggleThemeButtonComponent', () => {
  let component: ToggleThemeButtonComponent;
  let fixture: ComponentFixture<ToggleThemeButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ToggleThemeButtonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ToggleThemeButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
