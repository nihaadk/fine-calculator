import { CommonModule } from '@angular/common';
import { Component, Signal, computed, inject } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { Store } from '../../+state/store';
import { getExceedingSpeed } from '../../utils/store-helper';
import { LabelComponent } from '../form/label/label.component';

@Component({
  selector: 'app-calculation-state',
  standalone: true,
  imports: [CommonModule, LabelComponent, TranslateModule],
  template: `
    <div class="stats stats-vertical lg:stats-horizontal my-5">
      <div class="stat place-items-center">
        <div class="stat-title info-content" translate>SAFETY_MARGIN</div>
        <div class="stat-value">{{ allowedSpeed() }} <span class="text-base">km/h</span></div>
      </div>

      <div class="stat place-items-center">
        <div class="stat-title info-content" translate>NET_SPEED</div>
        <div class="stat-value">{{ netSpeed() }} <span class="text-base">km/h</span></div>
      </div>

      <div class="stat place-items-center">
        <div class="stat-title info-content" translate>EXCEEDING</div>
        <div class="stat-value">
          {{ exceedingSpeed() }} <span class="text-base">km/h</span>
        </div>
      </div>
    </div>
  `,
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
