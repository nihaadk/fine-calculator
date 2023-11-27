import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="navbar bg-base-100">
      <a class="btn btn-ghost text-xl">FineCalculator</a>
    </div>
  `,
  styles: ``,
})
export class NavbarComponent {}
