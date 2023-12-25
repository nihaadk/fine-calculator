import { Component, Signal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { AlertErrorComponent } from '../alert/alert-error.component';
import { AlertSuccessComponent } from '../alert/alert-success.component';
import { LabelComponent } from '../form/label/label.component';
import { Store } from '../../+state/store';
import { MeasuresMessages } from '../../enums/measures-messages.enum';

@Component({
  selector: 'app-show-measure-message',
  standalone: true,
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
  `,
})
export class ShowMeasureMessageComponent {
  NO_CONSEQUENCES = MeasuresMessages.NO_CONSEQUENCES;

  #store = inject(Store);
  measureMessage: Signal<string> = this.#store.getMeasureMessage;
}
