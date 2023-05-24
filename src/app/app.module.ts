import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { UtilityFxnsService } from './services/utility-fxns.service';
import { MatIconModule } from '@angular/material/icon';
import { HomeComponent } from './home/home.component';
import { ThemeService } from './services/theme.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    MatIconModule
  ],
  providers: [UtilityFxnsService, ThemeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
