import { Component, Input, forwardRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

type radioValueType = string | null;

const RADIO_CONTROL_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => RadioControlerComponent),
  multi: true,
};

@Component({
  selector: 'app-radio-contoler',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  template: `
    @for (option of options; track $index) {
      <div class="form-control">
        <label class="label cursor-pointer">
          <span class="lsabel-text" translate>{{ prefix + option }}</span>
          <input
            type="radio"
            [name]="name"
            [id]="getId(option, $index)"
            [value]="value"
            (blur)="onBlur()"
            [checked]="isCheck(value)"
            (change)="valueChanged(option)"
            class="radio checked:radio-button-color"
          />
        </label>
      </div>
    }
  `,
  providers: [RADIO_CONTROL_ACCESSOR],
})
export class RadioControlerComponent implements ControlValueAccessor {
  @Input({ required: true }) options: string[] = [];
  @Input() translatePrefix?: string = '';
  @Input({ required: true }) name: string = '';

  value: radioValueType = null;
  private onChange!: (value: radioValueType) => void;
  private onTouched!: () => void;

  writeValue(value: radioValueType): void {
    this.value = value;
  }

  registerOnChange(onChange: (value: radioValueType) => void): void {
    this.onChange = onChange;
  }

  registerOnTouched(onTouched: () => void): void {
    this.onTouched = onTouched;
  }

  valueChanged(newValue: radioValueType): void {
    this.value = newValue;
    this.onChange(this.value);
  }

  onBlur(): void {
    this.onTouched();
  }

  getId(option: string, index: number): string {
    return `${option}-${index}`;
  }

  isCheck(value: radioValueType): boolean {
    return this.value === value;
  }

  get prefix(): string {
    return this.translatePrefix ? `${this.translatePrefix}.` : 'RADIO.';
  }
}
