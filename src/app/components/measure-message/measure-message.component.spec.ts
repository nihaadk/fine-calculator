import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TranslateModule, TranslatePipe } from '@ngx-translate/core';
import { Store } from '../../+state/store';
import { MockStore } from '../../mocks/state-mock';
import { AlertErrorComponent } from '../alert/alert-error.component';
import { AlertSuccessComponent } from '../alert/alert-success.component';
import { LabelComponent } from '../form/label/label.component';
import { MeasureMessageComponent } from './measure-message.component';


describe('MeasureMessageComponent', () => {
  let component: MeasureMessageComponent;
  let fixture: ComponentFixture<MeasureMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        MeasureMessageComponent,
        TranslatePipe,
        LabelComponent,
        AlertSuccessComponent,
        AlertErrorComponent,
        TranslateModule.forRoot()
      ],
      providers: [
        { provide: Store, useClass: MockStore }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(MeasureMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
