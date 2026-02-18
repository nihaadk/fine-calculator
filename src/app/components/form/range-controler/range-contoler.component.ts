import { ChangeDetectionStrategy, Component, input, model } from '@angular/core';
import { FormValueControl } from '@angular/forms/signals';

type rangeValueType = number | null;

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-range-contoler',
  template: `
    <input
      [id]="id()"
      [step]="step()"
      [value]="value()"
      [min]="minValue()"
      [max]="maxValue()"
      (input)="onInputChange($event)"
      type="range"
      class="range range-primary range-md w-full"
    />

    <div class="w-full flex justify-center text-md px-2 py-2">
      <span>{{ value() }} km/h</span>
    </div>
  `,
})
export class RangeControlerComponent implements FormValueControl<rangeValueType> {
  id = input.required<string>();
  step = input<number>(1);
  value = model<rangeValueType>(0);
  minValue = input<number | undefined>(0);
  maxValue = input<number | undefined>(130);
  touched = model(false);

  onInputChange(event: Event): void {
    const target = this.targetValue(event);
    this.value.set(target);
  }

  private targetValue(event: Event): number {
    const target = event.target as HTMLInputElement;
    return target.valueAsNumber;
  }
}
