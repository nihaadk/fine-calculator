import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FineFormComponent } from '../../components/fine-form/fine-form.component';
import { ResultComponent } from '../../components/result/result.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FineFormComponent, ResultComponent],
  template: `
    <div class="flex w-full">
      <div class="w-1/2">
        <div class="card bg-base-100 shadow-xl">
          <div class="card-body">
            <h2 class="card-title text-2xl divider divider-primary divider-start">EINGABE</h2>
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
