import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class OptionService {
  constructor() {}

  getOptions(enumType: { [key: number]: string }): string[] {
    const enumValues = Object.values(enumType);
    return enumValues;
  }
}
