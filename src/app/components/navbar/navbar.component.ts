import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ToggleThemeButtonComponent } from '../toggle-theme-button/toggle-theme-button.component';
import { LanguageDropdownComponent } from '../language-dropdown/language-dropdown.component';
import { TranslateModule } from '@ngx-translate/core';

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
        <span class="text-2xl text-primary font-bold font-mono cursor-default" translate
          >APP_TITLE</span
        >
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
