import { Component, Input, forwardRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ControlValueAccessor,
  NG_VALUE_ACCESSOR,
  SelectControlValueAccessor,
} from '@angular/forms';

const SELECT_CONTROL_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => DropdownControlerComponent),
  multi: true,
};

@Component({
  selector: 'app-dropdown-controler',
  standalone: true,
  imports: [CommonModule],
  template: `
    <select class="select select-bordered select-sm w-full max-w-xs">
      @for (option of options; track $index) {
        <option [id]="$index" [value]="option" [selected]="option === value">
          {{ option }}
        </option>
      }
    </select>
  `,
  providers: [SELECT_CONTROL_ACCESSOR],
})
export class DropdownControlerComponent extends SelectControlValueAccessor {
  @Input({ required: true }) options: string[] = [];
}
