import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FineFormComponent } from '../../components/fine-form/fine-form.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FineFormComponent],
  template: `
    <div class="card w-96 bg-base-100 shadow-xl">
      <div class="card-body">
        <h2 class="card-title">EINGABE</h2>
        <app-fine-form />
      </div>
    </div>
  `,
})
export default class HomeComponent {}
