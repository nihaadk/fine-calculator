import { ChangeDetectionStrategy, Component } from '@angular/core';


@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'app-form-control',
    template: `
    <div class="border rounded-lg border-base-300 px-3 sm:px-6 pt-2 pb-3 sm:pb-4 mb-3 sm:mb-4"><ng-content /></div>
  `
})
export class FormControlWrapperComponent {}
