import { Component, Signal, computed, inject } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { Store } from '../../+state/store';
import { getExceedingSpeed } from '../../utils/store-helper';

@Component({
    selector: 'app-calculation-state',
    imports: [TranslatePipe],
    template: `
    <div class="stats stats-vertical lg:stats-horizontal my-5">
      <div class="stat place-items-center">
        <div class="stat-title info-content">{{ 'SAFETY_MARGIN' | translate}}</div>
        <div class="stat-value">{{ allowedSpeed() }} <span class="text-base">km/h</span></div>
      </div>

      <div class="stat place-items-center">
        <div class="stat-title info-content">{{ 'NET_SPEED' | translate }}</div>
        <div class="stat-value">{{ netSpeed() }} <span class="text-base">km/h</span></div>
      </div>

      <div class="stat place-items-center">
        <div class="stat-title info-content">{{ 'EXCEEDING' | translate}}</div>
        <div class="stat-value">
          {{ exceedingSpeed() }} <span class="text-base">km/h</span>
        </div>
      </div>
    </div>
  `
})
export class CalculationStateComponent {
  #store = inject(Store);
  allowedSpeed: Signal<number | null> = this.#store.allowedSpeed;
  netSpeed: Signal<number | null> = this.#store.netSpeed;
  radarValue: Signal<number> = this.#store.radarValue;
  exceedingSpeed: Signal<number> = this.calcExceedingSpeed();

  private calcExceedingSpeed(): Signal<number> {
    return computed(() =>
      getExceedingSpeed(this.netSpeed(), this.allowedSpeed(), this.radarValue()),
    );
  }
}
