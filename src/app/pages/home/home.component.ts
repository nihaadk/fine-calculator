import { ChangeDetectionStrategy, Component } from '@angular/core';
import { EntryFormComponent } from '@layouts/entry-form/entry-form.component';
import { ResultComponent } from '@layouts/result/result.component';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-home',
  imports: [EntryFormComponent, ResultComponent, TranslatePipe],
  template: `
    <div class="flex flex-col sm:flex-row">
      <div class="w-full sm:w-1/2">
        <div class="card bg-base-100 shadow-xl">
          <div class="card-body">
            <h2 class="card-title text-4xl justify-center divider divider-primary">
              {{ 'INPUT' | translate }}
            </h2>

            <app-entry-form />
          </div>
        </div>
      </div>
      <div class="divider divider-vertical sm:divider-horizontal"></div>
      <div class="w-full sm:w-1/2">
        <app-result />
      </div>
    </div>
  `,
})
export default class HomeComponent {}
