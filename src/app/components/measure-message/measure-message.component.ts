import { CommonModule } from '@angular/common';
import { Component, Signal, inject } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { Store } from '../../+state/store';
import { MeasuresMessages } from '../../enums/measures-messages.enum';
import { AlertErrorComponent } from '../alert/alert-error.component';
import { AlertSuccessComponent } from '../alert/alert-success.component';
import { LabelComponent } from '../form/label/label.component';

@Component({
    selector: 'app-measure-message',
    imports: [
        CommonModule,
        TranslateModule,
        LabelComponent,
        AlertSuccessComponent,
        AlertErrorComponent,
    ],
    template: `
    <app-label>{{ 'ADMINISTRATIVE_MEASURES' | translate }}</app-label>
    @if (measureMessage() === NO_CONSEQUENCES) {
      <app-alert-success>
        {{ 'MEASURE_MESSAGES.' + measureMessage() | translate }}
      </app-alert-success>
    } @else {
      <app-alert-error>
        {{ 'MEASURE_MESSAGES.' + measureMessage() | translate }}
      </app-alert-error>
    }
  `
})
export class MeasureMessageComponent {
  NO_CONSEQUENCES = MeasuresMessages.NO_CONSEQUENCES;

  #store = inject(Store);
  measureMessage: Signal<string> = this.#store.getMeasureMessage;
}
