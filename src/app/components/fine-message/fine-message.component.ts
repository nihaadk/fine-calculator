import { CommonModule } from '@angular/common';
import { Component, Signal, inject } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { Store } from '../../+state/store';
import { MeasuresMessages } from '../../enums/measures-messages.enum';
import { AlertErrorComponent } from '../alert/alert-error.component';
import { AlertSuccessComponent } from '../alert/alert-success.component';
import { LabelComponent } from '../form/label/label.component';

@Component({
  selector: 'app-fine-message',
  standalone: true,
  imports: [
    CommonModule,
    TranslateModule,
    LabelComponent,
    AlertSuccessComponent,
    AlertErrorComponent,
  ],
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
