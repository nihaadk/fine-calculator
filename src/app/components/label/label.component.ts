import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-label',
  standalone: true,
  imports: [CommonModule],
  template: `
    <label class="label">
      <span class="label-text text-xl py-2">
        <ng-content />
      </span>
    </label>
  `,
  styles: ``,
})
export class LabelComponent {}
