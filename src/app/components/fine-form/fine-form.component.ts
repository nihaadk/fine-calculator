import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, UntypedFormGroup } from '@angular/forms';
import { RadioControlerComponent } from '../radio-controler/radio-controler.component';
import { RangeControlerComponent } from '../range-controler/range-contoler.component';
import { LabelComponent } from '../label/label.component';
import { OptionService } from '../../utils/option.service';
import { StreetType } from '../../enums/street-type.enum';
import { RadarType } from '../../enums/radar-type.enum';
import { FormControlWrapperComponent } from '../form-control-wrapper/form-control-wrapper.component';
import { FineStore } from '../../+state/FineStore';

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
  ],
  template: `
    <form [formGroup]="form" class="p-2">
      <app-form-control>
        <app-label>Strassentyp</app-label>
        <app-radio-contoler
          name="strassentyp"
          formControlName="strassentyp"
          [options]="streetTypOptions"
        />
      </app-form-control>

      <app-form-control>
        <app-label>Erlaubte Geschwindigkeit</app-label>
        <app-range-contoler formControlName="allowedSpeed" [max]="120" [step]="10" />
      </app-form-control>

      <app-form-control>
        <app-label>Geschätzte Geschwindigkeit:</app-label>
        <app-range-contoler formControlName="netSpeed" [max]="150" />
      </app-form-control>

      <app-form-control>
        <app-label>Radartype</app-label>
        <app-radio-contoler
          name="radartyp"
          formControlName="radartyp"
          [options]="radartypeOptions"
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
  #fineStore = inject(FineStore);

  ngOnInit(): void {
    this.loadOptions();
    this.buildForm();
    this.subscribeForm();
  }

  private buildForm(): void {
    this.form = this.#formBuilder.group({
      strassentyp: [this.streetTypOptions[0]],
      allowedSpeed: [0],
      netSpeed: [0],
      radartyp: [this.streetTypOptions[0]],
    });
  }

  private loadOptions(): void {
    this.streetTypOptions = this.#optionService.getOptions(StreetType);
    this.radartypeOptions = this.#optionService.getOptions(RadarType);
  }

  private subscribeForm(): void {
    this.form.valueChanges.subscribe(value => this.#fineStore.update(value));
  }
}
