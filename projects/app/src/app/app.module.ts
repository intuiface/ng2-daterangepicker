import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Daterangepicker } from '../../../ng2-daterangepicker/src/public-api';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    Daterangepicker
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
