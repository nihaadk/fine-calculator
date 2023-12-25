import { Component, Input, forwardRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

type rangeValueType = number | null;

const RANGE_CONTROL_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => RangeControlerComponent),
  multi: true,
};

@Component({
  selector: 'app-range-contoler',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p>
      <input
        [min]="min"
        [max]="max"
        [step]="step"
        [value]="value"
        type="range"
        class="range range-input-color"
        (blur)="onBlur()"
        (input)="onInputChange($event)"
      />
    </p>

    <div class="w-full flex justify-center text-md px-2 py-2">
      <span>{{ value }} km/h</span>
    </div>
  `,
  providers: [RANGE_CONTROL_ACCESSOR],
})
export class RangeControlerComponent implements ControlValueAccessor {
  @Input() min: number = 0;
  @Input() max: number = 100;
  @Input() step: number = 1;

  value: rangeValueType = 0;

  private onChange!: (value: rangeValueType) => void;
  private onTouched!: () => void;

  writeValue(value: rangeValueType): void {
    !value ? (this.value = 0) : (this.value = value);
  }

  registerOnChange(onChange: (value: rangeValueType) => void): void {
    this.onChange = onChange;
  }

  registerOnTouched(onTouched: () => void): void {
    this.onTouched = onTouched;
  }

  onInputChange(event: Event): void {
    this.value = this.targetValue(event);
    this.onChange(this.value);
    this.onTouched();
  }

  onBlur(): void {
    this.onTouched();
  }

  private targetValue(event: Event): number {
    const target = event.target as HTMLInputElement;
    return +target.value;
  }
}
