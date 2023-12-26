import { FormControl } from '@angular/forms';

export interface IEntryForm {
  streetTyp: FormControl<string | null>;
  allowedSpeed: FormControl<number | null>;
  netSpeed: FormControl<number | null>;
  radarTyp: FormControl<string | null>;
}
