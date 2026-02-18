import { ChangeDetectionStrategy, Component, Signal, inject } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { Store } from '../../../+state/store';
import { AlertWarningComponent } from '../../alert/alert-warning.component';
import { CalculationStateComponent } from '../../calculation-state/calculation-state.component';
import { FineMessageComponent } from '../../fine-message/fine-message.component';
import { MeasureMessageComponent } from '../../measure-message/measure-message.component';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-result',
  imports: [
    TranslatePipe,
    AlertWarningComponent,
    FineMessageComponent,
    MeasureMessageComponent,
    CalculationStateComponent,
  ],
  styles: `
    @keyframes fadeSlideIn {
      from { opacity: 0; transform: translateY(-8px); }
      to   { opacity: 1; transform: translateY(0); }
    }
    .animate-result {
      animation: fadeSlideIn 0.35s ease-out;
    }
  `,
  template: `
    <div class="card bg-base-100 shadow-xl">
      <div class="card-body p-4 sm:p-8">
        <h2 class="card-title text-2xl sm:text-4xl justify-center divider divider-primary">
          {{ 'RESULT' | translate }}
        </h2>

        <app-calculation-state />

        @defer (when netSpeed()) {
          <div class="flex flex-col animate-result">
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
