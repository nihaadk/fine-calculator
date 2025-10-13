import { Component, effect, inject, signal } from '@angular/core';
import { Control, form } from '@angular/forms/signals';
import { FormControlWrapperComponent } from '@components/form/form-control-wrapper/form-control-wrapper.component';
import { LabelComponent } from '@components/form/label/label.component';
import { RadioControlerComponent } from '@components/form/radio-controler/radio-controler.component';
import { RangeControlerComponent } from '@components/form/range-controler/range-contoler.component';
import { RadarType } from '@enums/radar-type.enum';
import { StreetType } from '@enums/street-type.enum';
import { IFine } from '@interfaces/fine.interfaces';
import { TranslatePipe } from '@ngx-translate/core';
import { OptionService } from '@services/option.service';
import { Store } from '@state/store';

@Component({
  selector: 'app-entry-form',
  imports: [
    Control,
    RadioControlerComponent,
    RangeControlerComponent,
    LabelComponent,
    FormControlWrapperComponent,
    TranslatePipe,
  ],
  template: `
    <form class="p-2">
      <app-form-control>
        <app-label for="streetTyp">{{ 'STREET_TYPE' | translate }}</app-label>
        <app-radio-contoler
          id="streetTyp"
          name="streetTyp"
          [control]="form.streetTyp"
          [options]="streetOptions"
          [translatePrefix]="'STREET_TYPE_OPTIONS'"
        />
      </app-form-control>

      <app-form-control>
        <app-label for="allowedSpeed">{{ 'ALLOWED_SPEED' | translate }}</app-label>
        <app-range-contoler
          id="allowedSpeed"
          [control]="form.allowedSpeed"
          [step]="10"
          [max]="120"
        />
      </app-form-control>

      <app-form-control>
        <app-label for="netSpeed">{{ 'ESTIMATED_SPEED' | translate }}</app-label>
        <app-range-contoler id="netSpeed" [control]="form.netSpeed" [max]="150" />
      </app-form-control>

      <app-form-control>
        <app-label for="radarTyp">{{ 'RADAR_TYPE' | translate }}</app-label>
        <app-radio-contoler
          id="radarTyp"
          name="radarTyp"
          [control]="form.radarTyp"
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
    streetTyp: StreetType.INNER_TOWN.toString(),
    radarTyp: RadarType.LASER_FIX.toString(),
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
