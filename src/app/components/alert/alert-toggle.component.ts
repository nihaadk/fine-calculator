import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { AlertErrorComponent } from '@components/alert/alert-error.component';
import { AlertSuccessComponent } from '@components/alert/alert-success.component';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
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
