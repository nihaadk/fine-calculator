import { Component, input, model } from '@angular/core';
import { FormValueControl } from '@angular/forms/signals';
import { TranslateDirective } from '@ngx-translate/core';

type radioValueType = string | null;

@Component({
  selector: 'app-radio-contoler',
  imports: [TranslateDirective],
  template: `
    @for (option of options(); track $index) {
      <div class="form-control w-full mb-4">
        <label
          [for]="getId(option, $index)"
          class="label cursor-pointer flex justify-between items-center w-full"
        >
          <span class="label-text" translate>{{ prefix + option }}</span>
          <input
            type="radio"
            [name]="name()"
            [id]="getId(option, $index)"
            [value]="value()"
            [checked]="isCheck(value(), option)"
            (change)="valueChanged(option)"
            class="radio radio-primary"
          />
        </label>
      </div>
    }
  `,
})
export class RadioControlerComponent implements FormValueControl<radioValueType> {
  id = input<string>();
  options = input.required<string[]>();
  translatePrefix = input<string>('');
  name = input<string>('radio-name');
  value = model<radioValueType>(null);

  valueChanged(newValue: radioValueType): void {
    this.value.set(newValue);
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
