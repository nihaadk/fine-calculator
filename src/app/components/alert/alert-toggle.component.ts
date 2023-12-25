import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertSuccessComponent } from './alert-success.component';
import { AlertErrorComponent } from './alert-error.component';

@Component({
  selector: 'app-alert-toggle',
  standalone: true,
  imports: [CommonModule, AlertSuccessComponent, AlertErrorComponent],
  template: `
    @if (isError) {
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
  @Input() isError: boolean = false;
}
