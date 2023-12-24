import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-alert',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  template: `
    <div
      role="alert"
      class="alert"
      [class.alert-success]="isError"
      [class.alert-error]="!isError"
    >
      <span><ng-content /></span>
    </div>
  `,
})
export class AlertComponent {
  @Input() isError: boolean = false;
}
