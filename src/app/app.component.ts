import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NavbarComponent, FooterComponent],
  template: `
    <main>
      <app-navbar />
      <div class="mx-auto p-10 bg-primary-content">
        <router-outlet></router-outlet>
      </div>
    </main>
    <app-footer />
  `,
})
export class AppComponent {}
