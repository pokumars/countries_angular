import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilityFxnsService {

  capitaliseFirstLetter(word: string): string {
    return word.charAt(0).toUpperCase() + word.slice(1)
  }

  constructor() { }
}
