import { Component } from '@angular/core';


@Component({
    selector: 'app-form-control',
    template: `
    <div class="border rounded-lg border-base-300 px-6 pb-4 mb-4"><ng-content /></div>
  `
})
export class FormControlWrapperComponent {}
