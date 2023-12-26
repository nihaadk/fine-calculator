import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { Store } from '../../../+state/store';
import { RadarType } from '../../../enums/radar-type.enum';
import { StreetType } from '../../../enums/street-type.enum';
import { IEntryForm } from '../../../interfaces/entry-form.interface';
import { IFine } from '../../../interfaces/fine.interfaces';
import { OptionService } from '../../../service/option.service';
import { FormControlWrapperComponent } from '../../form/form-control-wrapper/form-control-wrapper.component';
import { LabelComponent } from '../../form/label/label.component';
import { RadioControlerComponent } from '../../form/radio-controler/radio-controler.component';
import { RangeControlerComponent } from '../../form/range-controler/range-contoler.component';

@Component({
  selector: 'app-entry-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RadioControlerComponent,
    RangeControlerComponent,
    LabelComponent,
    FormControlWrapperComponent,
    TranslateModule,
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
