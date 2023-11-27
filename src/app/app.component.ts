import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NavbarComponent],
  template: `
    <main class="main">
      <app-navbar />
      <div class="container mx-auto px-4">
        <router-outlet></router-outlet>
      </div>
    </main>
  `,
})
export class AppComponent {}
