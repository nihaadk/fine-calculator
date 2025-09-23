
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './components/layout/footer/footer.component';
import { NavbarComponent } from './components/layout/navbar/navbar.component';

@Component({
    selector: 'app-root',
    imports: [RouterOutlet, NavbarComponent, FooterComponent],
    template: `
    <main>
      <app-navbar />
      <div class="mx-auto p-10">
        <router-outlet></router-outlet>
      </div>
    </main>
    <app-footer />
  `
})
export class AppComponent {}
