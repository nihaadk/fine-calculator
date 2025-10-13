import { Component, effect, inject, input, model } from '@angular/core';
import { FormValueControl } from '@angular/forms/signals';
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-dropdown',
  template: `
    <select class="select select-bordered select-sm w-full max-w-xs">
      @for (option of options(); track $index) {
        <option [id]="$index" [value]="option" [selected]="option === value()">
          {{ getValue(option) }}
        </option>
      }
    </select>
  `,
})
export class DropdownComponent implements FormValueControl<string | null> {
  protected readonly translateService: TranslateService = inject(TranslateService);

  prefix = input<string>('');
  options = input.required<string[]>();
  value = model<string | null>(null);

  constructor() {
    effect(() => {
      console.log('Selected option:', this.value());
    });
  }

  getValue(option: string): string {
    if (!this.prefix()) return option;
    return this.translateService.instant(`${this.prefix()}.${option}`);
  }
}
