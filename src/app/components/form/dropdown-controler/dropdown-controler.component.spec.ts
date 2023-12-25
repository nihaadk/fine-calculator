import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownControlerComponent } from './dropdown-controler.component';

describe('DropdownControlerComponent', () => {
  let component: DropdownControlerComponent;
  let fixture: ComponentFixture<DropdownControlerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DropdownControlerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DropdownControlerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
