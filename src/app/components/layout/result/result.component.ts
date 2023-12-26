import { CommonModule } from '@angular/common';
import { Component, Signal, inject } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { Store } from '../../../+state/store';
import { AlertWarningComponent } from '../../alert/alert-warning.component';
import { CalculationStateComponent } from '../../calculation-state/calculation-state.component';
import { ShowFineMessageComponent } from '../../show-fine-message/show-fine-message.component';
import { ShowMeasureMessageComponent } from '../../show-measure-message/show-measure-message.component';

@Component({
  selector: 'app-result',
  standalone: true,
  imports: [
    CommonModule,
    TranslateModule,
    AlertWarningComponent,
    ShowFineMessageComponent,
    ShowMeasureMessageComponent,
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
            <app-show-fine-message />
            <app-show-measure-message />
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
