import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FineFormComponent } from '../../components/fine-form/fine-form.component';
import { ResultComponent } from '../../components/result/result.component';
import { TranslateModule, TranslatePipe } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FineFormComponent, ResultComponent, TranslateModule],
  template: `
    <div class="flex w-full">
      <div class="w-1/2">
        <div class="card bg-base-100 shadow-xl">
          <div class="card-body">
            <h2 class="card-title text-4xl justify-center divider divider-primary" translate>
              INPUT
            </h2>

            <app-fine-form />
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
