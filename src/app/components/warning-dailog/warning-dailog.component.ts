import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-warning-dailog',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  template: `
    <dialog #warning_dailog class="modal modal-bottom sm:modal-middle">
      <div class="modal-box">
        <h3 class="font-bold text-lg" translate>WARNING_DAILOG.TITLE</h3>
        <p class="py-4" translate>WARNING_DAILOG.MESSAGE</p>
        <div class="modal-action">
          <form method="dialog">
            <button class="btn" translate>WARNING_DAILOG.ACCEPT</button>
          </form>
        </div>
      </div>
    </dialog>
  `,
})
export class WarningDailogComponent implements AfterViewInit {
  @ViewChild('warning_dailog') dialogRef!: ElementRef<HTMLDialogElement>;

  ngAfterViewInit(): void {
    this.openDialog();
  }

  private openDialog(): void {
    this.dialogRef.nativeElement.showModal();
  }
}
