import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-form-control',
    imports: [CommonModule],
    template: `
    <div class="border rounded-lg border-base-300 px-6 pb-4 mb-4"><ng-content /></div>
  `
})
export class FormControlWrapperComponent {}
