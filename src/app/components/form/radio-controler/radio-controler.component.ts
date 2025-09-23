
import { Component, forwardRef, input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { TranslateDirective } from '@ngx-translate/core';


type radioValueType = string | null;

const RADIO_CONTROL_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => RadioControlerComponent),
  multi: true,
};

@Component({
    selector: 'app-radio-contoler',
    imports: [TranslateDirective],
    template: `
    @for (option of options(); track $index) {
      <div class="form-control">
        <label [for]="getId(option, $index)" class="label cursor-pointer">
          <span class="lsabel-text" translate>{{ prefix + option }}</span>
          <input
            type="radio"
            [name]="name()"
            [id]="getId(option, $index)"
            [value]="value"
            (blur)="onBlur()"
            [checked]="isCheck(value, option)"
            (change)="valueChanged(option)"
            class="radio checked:radio-button-color"
          />
        </label>
      </div>
    }
  `,
    providers: [RADIO_CONTROL_ACCESSOR]
})
export class RadioControlerComponent implements ControlValueAccessor {
  id = input<string>();
  options = input.required<string[]>();
  translatePrefix = input<string>('');
  name = input<string>('radio-name');

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
    if (this.id()) {
      return `${this.id()}-${option}-${index}`;
    }
    return `${option}-${index}`;
  }

  isCheck(selected: radioValueType, option: radioValueType): boolean {
    return option === selected;
  }

  get prefix(): string {
    return this.translatePrefix() ? `${this.translatePrefix()}.` : 'RADIO.';
  }
}
