import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownComponent } from '../form/dropdown/dropdown.component';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { Subscription } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';
import { Language } from '../../enums/language.enum';
import { OptionService } from '../../service/option.service';
import { defaultLanguage } from '../../config/translate.config';

@Component({
  selector: 'app-language-dropdown',
  standalone: true,
  imports: [CommonModule, DropdownComponent, ReactiveFormsModule],
  template: ` <app-dropdown [formControl]="control" [options]="languages" /> `,
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
    this.#translateService.setDefaultLang(defaultLanguage);
    this.#translateService.use(defaultLanguage);
    this.control.patchValue(this.currentLang);
  }

  private subscribeToLanguageChange(): void {
    this.subscriptions.add(
      this.control.valueChanges.subscribe(value => this.changeLanguage(value)),
    );
  }

  private changeLanguage(language: Language): void {
    this.#translateService.use(language);
  }

  private get currentLang(): string {
    return this.#translateService.currentLang;
  }
}
