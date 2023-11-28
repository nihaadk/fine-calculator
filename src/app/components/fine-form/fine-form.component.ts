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
      <app-radio-contoler formControlName="radio" [options]="opt" />

      <!-- <app-label>Strassentyp:</app-label>
      <app-range-contoler formControlName="range" /> -->

      <br />

      <button (click)="onSubmit()" class="btn btn-primary">Submit</button>
    </form>
  `,
})
export class FineFormComponent implements OnInit {
  form!: UntypedFormGroup;
  opt: string[] = [];

  #fb = inject(FormBuilder);
  #options = inject(OptionService);

  ngOnInit(): void {
    this.opt = this.#options.getStreetTypes(StreetType);
    this.buildForm();
  }

  onSubmit(): void {
    console.log(this.form.value);
    console.log();
  }

  private buildForm(): void {
    this.form = this.#fb.group({
      radio: [this.opt[0]],
      range: [null],
    });
  }
}
