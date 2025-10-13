import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { FormControlWrapperComponent } from '@components/form/form-control-wrapper/form-control-wrapper.component';
import { LabelComponent } from '@components/form/label/label.component';
import { RadioControlerComponent } from '@components/form/radio-controler/radio-controler.component';
import { RangeControlerComponent } from '@components/form/range-controler/range-contoler.component';
import { RadarType } from '@enums/radar-type.enum';
import { StreetType } from '@enums/street-type.enum';
import { IEntryForm } from '@interfaces/entry-form.interface';
import { IFine } from '@interfaces/fine.interfaces';
import { TranslatePipe } from '@ngx-translate/core';
import { OptionService } from '@services/option.service';
import { Store } from '@state/store';

@Component({
  selector: 'app-entry-form',
  imports: [
    ReactiveFormsModule,
    RadioControlerComponent,
    RangeControlerComponent,
    LabelComponent,
    FormControlWrapperComponent,
    TranslatePipe,
  ],
  template: `
    <form [formGroup]="form" class="p-2">
      <app-form-control>
        <app-label for="streetTyp">{{ 'STREET_TYPE' | translate }}</app-label>
        <app-radio-contoler
          id="streetTyp"
          name="streetTyp"
          formControlName="streetTyp"
          [options]="streetTypOptions"
          [translatePrefix]="'STREET_TYPE_OPTIONS'"
        />
      </app-form-control>

      <app-form-control>
        <app-label for="allowedSpeed">{{ 'ALLOWED_SPEED' | translate }}</app-label>
        <app-range-contoler
          id="allowedSpeed"
          formControlName="allowedSpeed"
          [max]="120"
          [step]="10"
        />
      </app-form-control>

      <app-form-control>
        <app-label for="netSpeed">{{ 'ESTIMATED_SPEED' | translate }}</app-label>
        <app-range-contoler id="netSpeed" formControlName="netSpeed" [max]="150" />
      </app-form-control>

      <app-form-control>
        <app-label for="radarTyp">{{ 'RADAR_TYPE' | translate }}</app-label>
        <app-radio-contoler
          id="radarTyp"
          name="radarTyp"
          formControlName="radarTyp"
          [options]="radarTypeOptions"
          [translatePrefix]="'RADAR_TYPE_OPTIONS'"
        />
      </app-form-control>
    </form>
  `,
})
export class EntryFormComponent implements OnInit {
  form!: FormGroup<IEntryForm>;
  streetTypOptions: string[] = [];
  radarTypeOptions: string[] = [];

  #formBuilder = inject(FormBuilder);
  #optionService = inject(OptionService);
  #store = inject(Store);

  ngOnInit(): void {
    this.loadOptions();
    this.buildForm();
    this.subscribeForm();
  }

  private buildForm(): void {
    this.form = this.#formBuilder.group<IEntryForm>({
      allowedSpeed: this.#formBuilder.control<number>(50),
      netSpeed: this.#formBuilder.control<number>(0),
      streetTyp: this.#formBuilder.control<string>(StreetType.INNER_TOWN.toString()),
      radarTyp: this.#formBuilder.control<string>(RadarType.LASER_FIX.toString()),
    });

    this.updateStore(this.form.value as IFine);
  }

  private loadOptions(): void {
    this.streetTypOptions = this.#optionService.getOptions(StreetType);
    this.radarTypeOptions = this.#optionService.getOptions(RadarType);
  }

  private subscribeForm(): void {
    this.form.valueChanges.subscribe(value => {
      this.updateStore(value as IFine);
    });
  }

  private updateStore(newFine: IFine): void {
    this.#store.updateFine(newFine);
  }
}
