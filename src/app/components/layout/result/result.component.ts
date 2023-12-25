import { CommonModule } from '@angular/common';
import { Component, OnInit, Signal, computed, inject } from '@angular/core';
import { Store } from '../../../+state/store';
import { LabelComponent } from '../../form/label/label.component';
import { TranslateModule } from '@ngx-translate/core';
import { MeasuresMessages } from '../../../enums/measures-messages.enum';
import { AlertToggleComponent } from '../../alert/alert-toggle.component';
import { getExceedingSpeed } from '../../../utils/store-helper';
import { AlertWarningComponent } from '../../alert/alert-warning.component';
import { ShowFineMessageComponent } from '../../show-fine-message/show-fine-message.component';
import { ShowMeasureMessageComponent } from '../../show-measure-message/show-measure-message.component';

@Component({
  selector: 'app-result',
  standalone: true,
  imports: [
    CommonModule,
    LabelComponent,
    TranslateModule,
    AlertToggleComponent,
    AlertWarningComponent,
    ShowFineMessageComponent,
    ShowMeasureMessageComponent,
  ],
  template: `
    <div class="card bg-base-100 shadow-xl">
      <div class="card-body">
        <h2 class="card-title text-4xl justify-center divider divider-primary" translate>
          RESULT
        </h2>

        <div class="stats stats-vertical lg:stats-horizontal my-5">
          <div class="stat place-items-center">
            <div class="stat-title" translate>SAFETY_MARGIN</div>
            <div class="stat-value">
              {{ allowedSpeed() }} <span class="text-base">km/h</span>
            </div>
          </div>

          <div class="stat place-items-center">
            <div class="stat-title" translate>NET_SPEED</div>
            <div class="stat-value">{{ netSpeed() }} <span class="text-base">km/h</span></div>
          </div>

          <div class="stat place-items-center">
            <div class="stat-title" translate>EXCEEDING</div>
            <div class="stat-value">
              {{ exceedingSpeed() }} <span class="text-base">km/h</span>
            </div>
          </div>
        </div>

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
  allowedSpeed: Signal<number> = this.#store.allowedSpeed;
  netSpeed: Signal<number> = this.#store.netSpeed;
  radarValue: Signal<number> = this.#store.radarValue;
  exceedingSpeed: Signal<number> = this.calcExceedingSpeed();

  private calcExceedingSpeed(): Signal<number> {
    return computed(() =>
      getExceedingSpeed(this.netSpeed(), this.allowedSpeed(), this.radarValue()),
    );
  }
}
