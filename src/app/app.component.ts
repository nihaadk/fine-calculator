import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NavbarComponent],
  template: `
    <main>
      <app-navbar />
      <div class="mx-auto p-4 m-0 h-screen bg-primary-content">
        <router-outlet></router-outlet>
      </div>
    </main>
  `,
})
export class AppComponent {}
