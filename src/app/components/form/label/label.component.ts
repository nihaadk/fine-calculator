import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-label',
  template: `
    <label class="label cursor-pointer" [for]="for()">
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
