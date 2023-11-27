import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, UntypedFormGroup } from '@angular/forms';

@Component({
  selector: 'app-fine-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <form>
      <label class="label">
        <span class="label-text">Strassentyp</span>
      </label>
      <div class="form-control">
        <label class="label cursor-pointer">
          <span class="label-text">Innerorts</span>
          <input type="radio" name="radio-10" class="radio checked:bg-blue-500" checked />
        </label>
      </div>
      <div class="form-control">
        <label class="label cursor-pointer">
          <span class="label-text">Ausserorts</span>
          <input type="radio" name="radio-10" class="radio checked:bg-blue-500" checked />
        </label>
      </div>
      <div class="form-control">
        <label class="label cursor-pointer">
          <span class="label-text">Autobahn</span>
          <input type="radio" name="radio-10" class="radio checked:bg-blue-500" checked />
        </label>
      </div>
    </form>
  `,
})
export class FineFormComponent {
  form!: UntypedFormGroup;

  constructor() {}
}
