import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { LabelComponent } from '../../components/form/label/label.component';
import { SupabaseService } from '../../service/supabase.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, LabelComponent],
  template: `
    <div class="flex justify-center">
      <div class="card lg:card-side bg-base-100 shadow-xl m-24 p-5">
        <div class="card-body">
          <h1 class="text-5xl font-bold">Login</h1>
          <form [formGroup]="form" (ngSubmit)="onSubmit()">
            <app-label>Email</app-label>
            <input
              id="email"
              type="email"
              placeholder="Your email"
              formControlName="email"
              class="input input-bordered w-full max-w-xs"
            />

            <input
              id="password"
              type="password"
              placeholder="Your password"
              formControlName="password"
              class="input input-bordered w-full max-w-xs"
            />

            <div class="card-actions mt-5">
              @if (loading) {
                <button class="btn btn-md btn-primary">
                  <span class="loading loading-spinner"></span>
                  loading
                </button>
              } @else {
                <button class="btn btn-md btn-primary">Send magic link</button>
              }
            </div>
          </form>
        </div>
      </div>
    </div>
  `,
})
export default class LoginComponent implements OnInit {
  loading = false;
  form!: FormGroup;

  #formBuilder = inject(FormBuilder);
  #supabase = inject(SupabaseService);

  ngOnInit(): void {
    this.buildForm();
  }

  private buildForm(): void {
    this.form = this.#formBuilder.group({
      email: '',
      password: '',
    });
  }

  async onSubmit(): Promise<void> {
    try {
      this.loading = true;
      const { email, password } = this.form.value;

      const { error } = await this.#supabase.signIn(email, password);
      if (error) throw error;
      alert('Check your email for the login link!');
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message);
      }
    } finally {
      this.form.reset();
      this.loading = false;
    }
  }
}
