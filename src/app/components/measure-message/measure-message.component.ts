import { Component, Signal, inject } from '@angular/core';
import { AlertErrorComponent } from '@components/alert/alert-error.component';
import { AlertSuccessComponent } from '@components/alert/alert-success.component';
import { LabelComponent } from '@components/form/label/label.component';
import { MeasuresMessages } from '@enums/measures-messages.enum';
import { TranslatePipe } from '@ngx-translate/core';
import { Store } from '@state/store';

@Component({
  selector: 'app-measure-message',
  imports: [TranslatePipe, LabelComponent, AlertSuccessComponent, AlertErrorComponent],
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
export class MeasureMessageComponent {
  NO_CONSEQUENCES = MeasuresMessages.NO_CONSEQUENCES;

  #store = inject(Store);
  measureMessage: Signal<string> = this.#store.getMeasureMessage;
}
