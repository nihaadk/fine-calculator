import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ToggleThemeButtonComponent } from '../toggle-theme-button/toggle-theme-button.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, ToggleThemeButtonComponent],
  template: `
    <div class="navbar bg-base-100">
      <div class="flex-1">
        <span class="text-2xl text-primary font-bold font-mono cursor-default"
          >Fine Calculator</span
        >
      </div>
      <div class="flex-none">
        <app-toggle-theme-button />
      </div>
    </div>
  `,
})
export class NavbarComponent {}
