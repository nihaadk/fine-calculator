import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, UntypedFormGroup } from '@angular/forms';
import { RadioControlerComponent } from '../radio-controler/radio-controler.component';
import { RangeControlerComponent } from '../range-controler/range-contoler.component';
import { LabelComponent } from '../label/label.component';
import { OptionService } from '../../utils/option.service';
import { StreetType } from '../../enums/street-type.enum';

@Component({
  selector: 'app-fine-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RadioControlerComponent,
    RangeControlerComponent,
    LabelComponent,
  ],
  template: `
    <form [formGroup]="form">
      <app-label>Strassentyp:</app-label>
      <app-radio-contoler formControlName="strassentyp" [options]="streetTypOptions" />

      <app-label>Erlaubte Geschwindigkeit:</app-label>
      <app-range-contoler formControlName="erlaubt" [max]="120" [step]="10" />

      <app-label>Geschätzte Geschwindigkeit:</app-label>
      <app-range-contoler formControlName="geschatzte" [max]="150" />

      <br />

      <button (click)="onSubmit()" class="btn btn-primary">Submit</button>
    </form>
  `,
})
export class FineFormComponent implements OnInit {
  form!: UntypedFormGroup;
  streetTypOptions: string[] = [];

  #formBuilder = inject(FormBuilder);
  #optionService = inject(OptionService);

  ngOnInit(): void {
    this.loadOptions();
    this.buildForm();
  }

  onSubmit(): void {
    console.log(this.form.value);
  }

  private buildForm(): void {
    this.form = this.#formBuilder.group({
      strassentyp: [this.streetTypOptions[0]],
      erlaubt: [null],
      geschatzte: [null],
    });
  }

  private loadOptions(): void {
    this.streetTypOptions = this.#optionService.getStreetTypes(StreetType);
  }
}
