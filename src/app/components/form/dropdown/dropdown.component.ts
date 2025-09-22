import { CommonModule } from '@angular/common';
import { Component, forwardRef, inject, input } from '@angular/core';
import { NG_VALUE_ACCESSOR, SelectControlValueAccessor } from '@angular/forms';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

const SELECT_CONTROL_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => DropdownComponent),
  multi: true,
};

@Component({
    selector: 'app-dropdown',
    imports: [CommonModule, TranslateModule],
    template: `
    <select class="select select-bordered select-sm w-full max-w-xs">
      @for (option of options(); track $index) {
        <option [id]="$index" [value]="option" [selected]="option === value">
          {{ getValue(option) }}
        </option>
      }
    </select>
  `,
    providers: [SELECT_CONTROL_ACCESSOR]
})
export class DropdownComponent extends SelectControlValueAccessor {
  prefix = input<string>('');
  options = input.required<string[]>();

  #translateService: TranslateService = inject(TranslateService);

  getValue(option: string): string {
    if (!this.prefix()) return option;
    return this.#translateService.instant(`${this.prefix()}.${option}`);
  }
}
