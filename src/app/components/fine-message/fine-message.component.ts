import { ChangeDetectionStrategy, Component, Signal, inject } from '@angular/core';
import { AlertErrorComponent } from '@components/alert/alert-error.component';
import { AlertSuccessComponent } from '@components/alert/alert-success.component';
import { LabelComponent } from '@components/form/label/label.component';
import { MeasuresMessages } from '@enums/measures-messages.enum';
import { TranslatePipe } from '@ngx-translate/core';
import { Store } from '@state/store';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-fine-message',
  imports: [TranslatePipe, LabelComponent, AlertSuccessComponent, AlertErrorComponent],
  template: `
    <app-label>{{ 'FINE' | translate }}</app-label>
    @if (fineMessage() === NO_FINE) {
      <app-alert-success>
        {{ 'FINE_MESSAGES.' + fineMessage() | translate }}
      </app-alert-success>
    } @else {
      <app-alert-error>
        {{ 'FINE_MESSAGES.' + fineMessage() | translate }}
      </app-alert-error>
    }
  `,
})
export class FineMessageComponent {
  NO_FINE = MeasuresMessages.NO_FINE;

  #store = inject(Store);
  fineMessage: Signal<string> = this.#store.getFineMessage;
}
