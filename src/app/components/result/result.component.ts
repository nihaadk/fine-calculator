import { CommonModule } from '@angular/common';
import { Component, OnInit, Signal, computed, inject } from '@angular/core';
import { Store } from '../../+state/store';
import { LabelComponent } from '../label/label.component';
import { TranslateModule } from '@ngx-translate/core';
import { MeasuresMessages } from '../../enums/measures-messages.enum';
import { AlertComponent } from '../alert/alert.component';

@Component({
  selector: 'app-result',
  standalone: true,
  imports: [CommonModule, LabelComponent, TranslateModule, AlertComponent],
  template: `
    <div class="card bg-base-100 shadow-xl">
      <div class="card-body">
        <h2 class="card-title text-4xl justify-center divider divider-primary" translate>
          RESULT
        </h2>

        <div class="stats my-5">
          <div class="stat place-items-center">
            <div class="stat-title" translate>SAFETY_MARGIN</div>
            <div class="stat-value">{{ allowedSpeed() }} km/h</div>
          </div>

          <div class="stat place-items-center">
            <div class="stat-title" translate>NET_SPEED</div>
            <div class="stat-value">{{ netSpeed() }} km/h</div>
          </div>

          <div class="stat place-items-center">
            <div class="stat-title" translate>EXCEEDING</div>
            <div class="stat-value">{{ exceedingSpeed() }} km/h</div>
          </div>
        </div>

        @defer (when netSpeed()) {
          <div class="flex flex-col">
            <app-label>{{ 'FINE' | translate }}</app-label>
            <app-alert [isError]="fineMessage() === NO_FINE">
              {{ 'FINE_MESSAGES.' + fineMessage() | translate }}
            </app-alert>

            <app-label>{{ 'ADMINISTRATIVE_MEASURES' | translate }}</app-label>
            <app-alert [isError]="measureMessage() === NO_CONSEQUENCES">
              {{ 'MEASURE_MESSAGES.' + measureMessage() | translate }}
            </app-alert>
          </div>
        }
      </div>
    </div>
  `,
})
export class ResultComponent {
  #store = inject(Store);
  allowedSpeed: Signal<number> = this.#store.allowedSpeedComp;
  netSpeed: Signal<number> = this.#store.netSpeedComp;
  exceedingSpeed: Signal<number> = computed(() => this.netSpeed() - this.allowedSpeed());
  measureMessage: Signal<string> = this.#store.getMeasureMessage;
  fineMessage: Signal<string> = this.#store.getFineMessage;

  NO_CONSEQUENCES = MeasuresMessages.NO_CONSEQUENCES;
  NO_FINE = MeasuresMessages.NO_FINE;
}
