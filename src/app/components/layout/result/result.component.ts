import { CommonModule } from '@angular/common';
import { Component, Signal, inject } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { Store } from '../../../+state/store';
import { AlertWarningComponent } from '../../alert/alert-warning.component';
import { CalculationStateComponent } from '../../calculation-state/calculation-state.component';
import { FineMessageComponent } from '../../fine-message/fine-message.component';
import { MeasureMessageComponent } from '../../measure-message/measure-message.component';

@Component({
  selector: 'app-result',
  standalone: true,
  imports: [
    CommonModule,
    TranslateModule,
    AlertWarningComponent,
    FineMessageComponent,
    MeasureMessageComponent,
    CalculationStateComponent,
  ],
  template: `
    <div class="card bg-base-100 shadow-xl">
      <div class="card-body">
        <h2 class="card-title text-4xl justify-center divider divider-primary" translate>
          RESULT
        </h2>

        <app-calculation-state />

        @defer (when netSpeed()) {
          <div class="flex flex-col">
            <app-fine-message />
            <app-measure-message />
          </div>
        } @placeholder {
          <app-alert-warning>
            {{ 'INTRODUCTION' | translate }}
          </app-alert-warning>
        }
      </div>
    </div>
  `,
})
export class ResultComponent {
  #store = inject(Store);
  allowedSpeed: Signal<number | null> = this.#store.allowedSpeed;
  netSpeed: Signal<number | null> = this.#store.netSpeed;
  radarValue: Signal<number> = this.#store.radarValue;
}
