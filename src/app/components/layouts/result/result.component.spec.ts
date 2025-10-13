import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TranslateModule } from '@ngx-translate/core';
import { MockStore } from '../../../mocks/state-mock';
import { MockTranslatePipe } from '../../../mocks/translate-mock';
import { AlertWarningComponent } from '../../alert/alert-warning.component';
import { CalculationStateComponent } from '../../calculation-state/calculation-state.component';
import { FineMessageComponent } from '../../fine-message/fine-message.component';
import { MeasureMessageComponent } from '../../measure-message/measure-message.component';
import { ResultComponent } from './result.component';

describe('ResultComponent', () => {
  let component: ResultComponent;
  let fixture: ComponentFixture<ResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ResultComponent,
        MockTranslatePipe,
        AlertWarningComponent,
        CalculationStateComponent,
        FineMessageComponent,
        MeasureMessageComponent,
        TranslateModule.forRoot()
      ],
      providers: [{ provide: 'Store', useClass: MockStore }],
    }).compileComponents();

    fixture = TestBed.createComponent(ResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
