import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class OptionService {
  getOptions(enumType: { [key: number]: string }): string[] {
    return Object.values(enumType);
  }
}
