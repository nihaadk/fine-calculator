import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class OptionService {
  constructor() {}

  getStreetTypes(enumType: { [key: number]: string }): string[] {
    const enumValues = Object.values(enumType);
    return enumValues;
  }
}
