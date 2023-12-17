import { CommonModule } from '@angular/common';
import { Component, OnInit, Signal, inject } from '@angular/core';
import { Store } from '../../+state/store';
import { LabelComponent } from '../label/label.component';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-result',
  standalone: true,
  imports: [CommonModule, LabelComponent, TranslateModule],
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

        <div class="flex flex-col">
          <app-label>{{ 'FINE' | translate }}</app-label>
          <div role="alert" class="alert alert-success">
            <span>Your purchase has been confirmed!</span>
          </div>

          <app-label>{{ 'ADMINISTRATIVE_MEASURES' | translate }}</app-label>
          <div role="alert" class="alert alert-success">
            <span>Your purchase has been confirmed!</span>
          </div>
        </div>
      </div>
    </div>
  `,
})
export class ResultComponent implements OnInit {
  ngOnInit(): void {
    console.log(
      'ResultComponent',
      this.allowedSpeed(),
      this.netSpeed(),
      this.exceedingSpeed(),
    );
  }
  #store = inject(Store);

  allowedSpeed: Signal<number> = this.#store.allowedSpeedComp;
  netSpeed: Signal<number> = this.#store.netSpeedComp;
  exceedingSpeed: Signal<number> = this.#store.exceedingSpeed;
}
