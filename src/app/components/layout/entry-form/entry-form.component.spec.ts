import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntryFormComponent } from './entry-form.component';

describe('FineFormComponent', () => {
  let component: EntryFormComponent;
  let fixture: ComponentFixture<EntryFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EntryFormComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(EntryFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
