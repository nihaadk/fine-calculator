import { Injectable, Signal, inject } from '@angular/core';
import { Store } from '../+state/store';
import { Theme } from '../enums/theme.enum';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  #store = inject(Store);

  toggleTheme() {
    const newTheme = this.isDarkTheme ? Theme.LIGHT : Theme.DARK;
    this.#store.updateTheme(newTheme);
    document.body.setAttribute('data-theme', newTheme);
  }

  get isDarkTheme() {
    return this.currentTheme() === Theme.DARK;
  }

  get currentTheme(): Signal<Theme> {
    return this.#store.theme;
  }
}
