import { Injectable } from '@angular/core';
import { ThemeKeys, ThemeValue } from '../models/theme.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  modes: Record<ThemeKeys, ThemeValue> = {
    light: { name: "light", icon: "light_mode" },
    dark: { name: "dark", icon: "dark_mode" }
  }

  currentTheme = new BehaviorSubject<ThemeValue>(this.modes.light)

  switchTheme(): void {
    const curTheme = this.currentTheme
    this.currentTheme.next(curTheme.value.name === "light" ? this.modes.dark : this.modes.light)

  }

  constructor() { }
}
