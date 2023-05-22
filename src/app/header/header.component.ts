import { Component } from '@angular/core';
import { UtilityFxnsService } from '../utility-fxns.service';
import { ThemeKeys, ThemeValue } from '../models/theme.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  modes: Record<ThemeKeys, ThemeValue> = {
    light: { name: "light", icon: "light_mode" },
    dark: { name: "dark", icon: "dark_mode" }
  }

  currentDarkLiteMode = this.modes.light
  nextDarkLiteMode = this.modes.dark


  toggleDarkLightMode(): void {
    this.currentDarkLiteMode = this.currentDarkLiteMode.name === "light" ? this.modes.dark : this.modes.light
    this.nextDarkLiteMode = this.nextDarkLiteMode.name === "light" ? this.modes.dark : this.modes.light
  }

  constructor(private utilityFxnsService: UtilityFxnsService) { }
}
