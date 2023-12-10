import { Component, Input, forwardRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

type radioValueType = string | null;

const RADIO_CONTROL_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => RadioControlerComponent),
  multi: true,
};

@Component({
  selector: 'app-radio-contoler',
  standalone: true,
  imports: [CommonModule],
  template: `
    @for (option of options; track $index) {
      <div class="form-control">
        <label class="label cursor-pointer">
          <span class="lsabel-text">{{ option }}</span>
          <input
            type="radio"
            [name]="name"
            [id]="option + '-' + $index"
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
  @Input() options: string[] = [];
  @Input() name: string = '';

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

  isCheck(value: radioValueType): boolean {
    return this.value === value;
  }
}
