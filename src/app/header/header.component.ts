import { Component, OnInit } from '@angular/core';
import { UtilityFxnsService } from '../services/utility-fxns.service';
import { ThemeKeys, ThemeValue } from '../models/theme.model';
import { ThemeService } from '../services/theme.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  themeOptions = this.themeService.modes
  currentDarkLiteMode: ThemeValue = { name: "light", icon: "light_mode" }
  nextDarkLiteMode = this.themeOptions.dark


  toggleDarkLightMode(): void {
    this.themeService.switchTheme()
    this.nextDarkLiteMode = this.nextDarkLiteMode.name === "light" ? this.themeOptions.dark : this.themeOptions.light
  }

  constructor(public utilityFxnsService: UtilityFxnsService, private themeService: ThemeService) { }

  ngOnInit(): void {
    this.themeService.currentTheme.subscribe((_theme) => {
      this.currentDarkLiteMode = _theme
      console.log('inside subscription_ current value of theme is ', _theme);

    })
  }
}
