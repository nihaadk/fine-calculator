import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  template: `
    <footer class="footer footer-center p-10 bg-base-200 text-base-content">
      <aside>
        <div class="grid grid-flow-col gap-4">
          <div class="w-14">
            <a target="_blank" href="https://angular.dev">
              <img alt="angular-logo" src="assets/img/angular-logo.webp" />
            </a>
          </div>
          <div class="w-14">
            <a target="_blank" href="https://daisyui.com"
              ><img alt="daisyui-logo" src="assets/img/daisyui-logo.webp"
            /></a>
          </div>
        </div>
        <p>Copyright © 2023 - All right reserved</p>
      </aside>
    </footer>
  `,
})
export class FooterComponent {}
