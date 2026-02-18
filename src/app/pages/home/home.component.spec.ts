import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EntryFormComponent } from '@layouts/entry-form/entry-form.component';
import { ResultComponent } from '@layouts/result/result.component';
import { MockTranslatePipe } from '@mocks/translate-mock';
import { TranslateModule } from '@ngx-translate/core';
import HomeComponent from '@pages/home/home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HomeComponent,
        MockTranslatePipe,
        EntryFormComponent,
        ResultComponent,
        TranslateModule.forRoot(),
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
