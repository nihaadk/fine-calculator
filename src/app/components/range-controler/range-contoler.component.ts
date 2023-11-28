import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-range-contoler',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p>
      <input type="range" min="0" max="120" value="25" class="range" step="10" />
    </p>

    <div class="w-full flex justify-between text-xs px-2">
      <span>|</span>
      <span>|</span>
      <span>|</span>
      <span>|</span>
      <span>|</span>
    </div>
  `,
  styles: ``,
})
export class RangeControlerComponent {}
