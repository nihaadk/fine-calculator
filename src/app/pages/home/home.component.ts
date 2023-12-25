import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { EntryFormComponent } from '../../components/layout/entry-form/entry-form.component';
import { ResultComponent } from '../../components/layout/result/result.component';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, EntryFormComponent, ResultComponent, TranslateModule],
  template: `
    <div class="flex w-full">
      <div class="w-1/2">
        <div class="card bg-base-100 shadow-xl">
          <div class="card-body">
            <h2 class="card-title text-4xl justify-center divider divider-primary" translate>
              INPUT
            </h2>

            <app-entry-form />
          </div>
        </div>
      </div>
      <div class="divider divider-horizontal"></div>
      <div class="w-1/2">
        <app-result />
      </div>
    </div>
  `,
})
export default class HomeComponent {}
