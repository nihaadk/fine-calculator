import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { LanguageDropdownComponent } from '../../language-dropdown/language-dropdown.component';
import { ToggleThemeButtonComponent } from '../../toggle-theme-button/toggle-theme-button.component';

@Component({
  selector: 'app-navbar',
  imports: [ToggleThemeButtonComponent, LanguageDropdownComponent, TranslatePipe],
  template: `
    <div class="navbar bg-base-100 dark:bg-base-200 px-4 shadow-md">
      <div class="flex-1 flex items-center">
        <div class="w-14 md:w-16 rounded">
          <img
            src="assets/img/blitzer-logo.svg"
            alt="app-logo"
            title="{{ 'APP_TITLE' | translate }}"
          />
        </div>
        <span class="hidden md:text-2xl md:flex ml-2 ">{{ 'APP_TITLE' | translate }}</span>
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
