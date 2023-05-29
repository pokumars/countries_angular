import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { UtilityFxnsService } from './services/utility-fxns.service';
import { MatIconModule } from '@angular/material/icon';
import { HomeComponent } from './home/home.component';
import { ThemeService } from './services/theme.service';
import { InputsComponent } from './inputs/inputs.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './services/in-memory-data.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    InputsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NoopAnimationsModule,
    MatIconModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {
      delay: 1000
    })
  ],
  providers: [UtilityFxnsService, ThemeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
