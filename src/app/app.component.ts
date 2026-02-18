import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from '@layouts/footer/footer.component';
import { NavbarComponent } from '@layouts/navbar/navbar.component';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, FooterComponent],
  template: `
    <main>
      <app-navbar />
      <div class="mx-auto p-3 sm:p-6 lg:p-10">
        <router-outlet />
      </div>
    </main>
    <app-footer />
  `,
})
export class AppComponent {}
