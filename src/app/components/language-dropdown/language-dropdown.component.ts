import { Component, inject, signal } from '@angular/core';
import { Language } from '@enums/language.enum';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import { OptionService } from '@services/option.service';

@Component({
  selector: 'app-language-dropdown',
  imports: [TranslatePipe],
  template: `
    <select
      class="select select-bordered select-sm w-full max-w-xs"
      (change)="onLanguageChange($event)"
    >
      @for (option of options; track $index) {
        <option [id]="$index" [value]="option" [selected]="option === value()">
          {{ 'LANGUAGE.' + option | translate }}
        </option>
      }
    </select>
  `,
})
export class LanguageDropdownComponent {
  protected readonly translateService: TranslateService = inject(TranslateService);
  protected readonly optionService: OptionService = inject(OptionService);
  protected readonly options = this.optionService.getOptions(Language);
  protected readonly currentLanguage = this.translateService.getCurrentLang().toUpperCase();
  protected readonly value = signal<Language | string | null>(this.currentLanguage);

  onLanguageChange(event: Event): void {
    const select = event.target as HTMLSelectElement;
    const selectedLang = select.value as Language;
    this.value.set(selectedLang);
    this.changeLanguage(selectedLang);
  }

  private changeLanguage(language: Language): void {
    this.translateService.use(language.toLowerCase());
  }
}
