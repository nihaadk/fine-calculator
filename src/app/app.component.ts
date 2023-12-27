import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './components/layout/footer/footer.component';
import { NavbarComponent } from './components/layout/navbar/navbar.component';
import { WarningDailogComponent } from './components/warning-dailog/warning-dailog.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    NavbarComponent,
    FooterComponent,
    WarningDailogComponent,
  ],
  template: `
    <app-warning-dailog />
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
