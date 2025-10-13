
import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { DropdownComponent } from '@components/form/dropdown/dropdown.component';
import { defaultLanguage } from '@config/translate.config';
import { Language } from '@enums/language.enum';
import { TranslateService } from '@ngx-translate/core';
import { OptionService } from '@services/option.service';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-language-dropdown',
    imports: [DropdownComponent, ReactiveFormsModule],
    template: `
    <app-dropdown [prefix]="'LANGUAGE'" [formControl]="control" [options]="languages" />
  `
})
export class LanguageDropdownComponent implements OnInit, OnDestroy {
  #translateService: TranslateService = inject(TranslateService);
  #optionService: OptionService = inject(OptionService);

  languages = this.#optionService.getOptions(Language);
  control: FormControl = new FormControl(null);

  private subscriptions: Subscription = new Subscription();

  ngOnInit(): void {
    this.initLanguage();
    this.subscribeToLanguageChange();
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  private initLanguage(): void {
    this.#translateService.use(defaultLanguage);
    this.control.patchValue(this.currentLang);
  }

  private subscribeToLanguageChange(): void {
    this.subscriptions.add(
      this.control.valueChanges.subscribe(value => this.changeLanguage(value)),
    );
  }

  private changeLanguage(language: Language): void {
    this.#translateService.use(language.toLowerCase());
  }

  private get currentLang(): string {
    return this.#translateService.getCurrentLang().toUpperCase();
  }
}
