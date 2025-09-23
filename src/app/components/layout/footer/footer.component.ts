import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-footer',
  imports: [TranslatePipe, NgOptimizedImage],
  template: `
    <footer class="footer footer-center p-10 bg-base-200 text-base-content">
      <aside>
        <div class="grid grid-flow-col gap-4">
          <div class="w-14">
            <a target="_blank" href="https://angular.dev">
              <img
                alt="angular-logo"
                ngSrc="assets/img/angular-logo.png"
                width="400"
                height="400"
                priority
              />
            </a>
          </div>
          <div class="w-14">
            <a target="_blank" href="https://daisyui.com"
              ><img
                alt="daisyui-logo"
                ngSrc="assets/img/daisyui-logo.png"
                width="400"
                height="400"
                priority
            /></a>
          </div>
        </div>
        <p>{{ 'COPYRIGHT' | translate }}</p>
      </aside>
    </footer>
  `,
})
export class FooterComponent {}
