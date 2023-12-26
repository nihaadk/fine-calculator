import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { LanguageDropdownComponent } from '../../language-dropdown/language-dropdown.component';
import { ToggleThemeButtonComponent } from '../../toggle-theme-button/toggle-theme-button.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    CommonModule,
    ToggleThemeButtonComponent,
    LanguageDropdownComponent,
    TranslateModule,
  ],
  template: `
    <div class="navbar bg-base-100">
      <div class="flex-1">
        <div class="w-16 md:w-28 rounded">
          <img
            src="assets/img/blitzer-logo.svg"
            alt="app-logo"
            title="{{ 'APP_TITLE' | translate }}"
          />
        </div>
      </div>
      <div class="flex-none">
        <ul class="menu menu-horizontal px-1">
          <li>
            <app-language-dropdown />
          </li>
          <li><app-toggle-theme-button /></li>
        </ul>
      </div>
    </div>
  `,
})
export class NavbarComponent {}
