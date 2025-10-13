import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TranslateModule } from '@ngx-translate/core';
import { EntryFormComponent } from './entry-form.component';

describe('EntryFormComponent', () => {
  let component: EntryFormComponent;
  let fixture: ComponentFixture<EntryFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EntryFormComponent, TranslateModule.forRoot()],
    }).compileComponents();

    fixture = TestBed.createComponent(EntryFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
