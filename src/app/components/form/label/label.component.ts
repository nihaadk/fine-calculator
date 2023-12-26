import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-label',
  standalone: true,
  imports: [CommonModule],
  template: `
    <label class="label" [htmlFor]="for">
      <span class="label-text text-xl py-2">
        <ng-content />
      </span>
    </label>
  `,
  styles: ``,
})
export class LabelComponent {
  @Input() for!: string;
}
