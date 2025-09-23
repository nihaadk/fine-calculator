import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { AlertErrorComponent } from './alert-error.component';
import { AlertSuccessComponent } from './alert-success.component';

@Component({
  selector: 'app-alert-toggle',
  imports: [CommonModule, AlertSuccessComponent, AlertErrorComponent],
  template: `
    @if (isError()) {
      <app-alert-success>
        <ng-content />
      </app-alert-success>
    } @else {
      <app-alert-error>
        <ng-content />
      </app-alert-error>
    }
  `,
})
export class AlertToggleComponent {
  isError = input<boolean>(false);
}
