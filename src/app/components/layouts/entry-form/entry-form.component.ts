import { ChangeDetectionStrategy, Component, effect, inject, signal } from '@angular/core';
import { FormField, form } from '@angular/forms/signals';
import { AlertWarningComponent } from '@components/alert/alert-warning.component';
import { FormControlWrapperComponent } from '@components/form/form-control-wrapper/form-control-wrapper.component';
import { LabelComponent } from '@components/form/label/label.component';
import { RadioControlerComponent } from '@components/form/radio-controller/radio-controller.component';
import { RangeControlerComponent } from '@components/form/range-controller/range-controller.component';
import { RadarType } from '@enums/radar-type.enum';
import { StreetType } from '@enums/street-type.enum';
import { IFine } from '@interfaces/fine.interfaces';
import { TranslatePipe } from '@ngx-translate/core';
import { OptionService } from '@services/option.service';
import { Store } from '@state/store';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-entry-form',
  imports: [
    FormField,
    RadioControlerComponent,
    RangeControlerComponent,
    LabelComponent,
    FormControlWrapperComponent,
    AlertWarningComponent,
    TranslatePipe,
  ],
  template: `
    <form class="p-2">
      <app-form-control>
        <app-label for="streetTyp">{{ 'STREET_TYPE' | translate }}</app-label>
        <app-radio-controller
          id="streetTyp"
          [ariaLabel]="'STREET_TYPE' | translate"
          [formField]="form.streetTyp"
          [options]="streetOptions"
          [translatePrefix]="'STREET_TYPE_OPTIONS'"
        />
      </app-form-control>

      <app-form-control>
        <app-label for="allowedSpeed">{{ 'ALLOWED_SPEED' | translate }}</app-label>
        <app-range-controller
          id="allowedSpeed"
          [ariaLabel]="'ALLOWED_SPEED' | translate"
          [formField]="form.allowedSpeed"
          [step]="10"
          [maxValue]="120"
        />
      </app-form-control>

      <app-form-control>
        <app-label for="netSpeed">{{ 'ESTIMATED_SPEED' | translate }}</app-label>
        <app-range-controller
          id="netSpeed"
          [ariaLabel]="'ESTIMATED_SPEED' | translate"
          [formField]="form.netSpeed"
          [maxValue]="150"
        />
      </app-form-control>

      <app-form-control>
        <app-label for="radarTyp">{{ 'RADAR_TYPE' | translate }}</app-label>
        <app-radio-controller
          id="radarTyp"
          [ariaLabel]="'RADAR_TYPE' | translate"
          [formField]="form.radarTyp"
          [options]="radarOptions"
          [translatePrefix]="'RADAR_TYPE_OPTIONS'"
        />
      </app-form-control>
    </form>
  `,
})
export class EntryFormComponent {
  protected readonly store = inject(Store);
  protected readonly optionService = inject(OptionService);

  protected readonly model = signal<IFine>({
    allowedSpeed: 50,
    netSpeed: 0,
    streetTyp: StreetType.INNER_TOWN,
    radarTyp: RadarType.LASER_FIX,
  });
  protected readonly form = form<IFine>(this.model);

  protected readonly streetOptions: string[] = this.optionService.getOptions(StreetType);
  protected readonly radarOptions: string[] = this.optionService.getOptions(RadarType);

  constructor() {
    effect(() => {
      this.store.updateFine(this.model());
    });
  }
}
