import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, UntypedFormGroup } from '@angular/forms';
import { Store } from '../../+state/store';
import { RadarType } from '../../enums/radar-type.enum';
import { StreetType } from '../../enums/street-type.enum';
import { OptionService } from '../../service/option.service';
import { FormControlWrapperComponent } from '../form-control-wrapper/form-control-wrapper.component';
import { LabelComponent } from '../label/label.component';
import { RadioControlerComponent } from '../radio-controler/radio-controler.component';
import { RangeControlerComponent } from '../range-controler/range-contoler.component';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-fine-form',
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
        <app-label>{{ 'STREET_TYPE' | translate }}</app-label>
        <app-radio-contoler
          name="strassentyp"
          formControlName="strassentyp"
          [options]="streetTypOptions"
          [translatePrefix]="'STREET_TYPE_OPTIONS'"
        />
      </app-form-control>

      <app-form-control>
        <app-label>{{ 'ALLOWED_SPEED' | translate }}</app-label>
        <app-range-contoler formControlName="allowedSpeed" [max]="120" [step]="10" />
      </app-form-control>

      <app-form-control>
        <app-label>{{ 'ESTIMATED_SPEED' | translate }}</app-label>
        <app-range-contoler formControlName="netSpeed" [max]="150" />
      </app-form-control>

      <app-form-control>
        <app-label>{{ 'RADAR_TYPE' | translate }}</app-label>
        <app-radio-contoler
          name="radartyp"
          formControlName="radartyp"
          [options]="radartypeOptions"
          [translatePrefix]="'RADAR_TYPE_OPTIONS'"
        />
      </app-form-control>
    </form>
  `,
})
export class FineFormComponent implements OnInit {
  form!: UntypedFormGroup;
  streetTypOptions: string[] = [];
  radartypeOptions: string[] = [];

  #formBuilder = inject(FormBuilder);
  #optionService = inject(OptionService);
  #store = inject(Store);

  ngOnInit(): void {
    this.loadOptions();
    this.buildForm();
    this.subscribeForm();
  }

  private buildForm(): void {
    const streetTypInitValue = this.streetTypOptions[0];
    const radarTypInitValue = this.radartypeOptions[0];
    const netSpeedInitValue = 0;
    const allowedSpeedInitValue = 50;

    this.form = this.#formBuilder.group({
      strassentyp: [streetTypInitValue],
      allowedSpeed: [allowedSpeedInitValue],
      netSpeed: [netSpeedInitValue],
      radartyp: [radarTypInitValue],
    });

    this.#store.updateFine(this.form.value);
  }

  private loadOptions(): void {
    this.streetTypOptions = this.#optionService.getOptions(StreetType);
    this.radartypeOptions = this.#optionService.getOptions(RadarType);
  }

  private subscribeForm(): void {
    this.form.valueChanges.subscribe(value => this.#store.updateFine(value));
  }
}
