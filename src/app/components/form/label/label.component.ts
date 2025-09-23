import { Component, input } from '@angular/core';

@Component({
  selector: 'app-label',
  template: `
    <label class="label" [htmlFor]="for()">
      <span class="label-text text-xl py-2">
        <ng-content />
      </span>
    </label>
  `,
  styles: ``,
})
export class LabelComponent {
  for = input<string>();
}
