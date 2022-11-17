import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { MaterialComponentsModule } from 'src/app/modules/material-components/material-components.module';
import { AppComponent } from './app.component';
import { SportResultModule } from './components/sport-result/sport-result.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, BrowserAnimationsModule, HttpClientModule, MaterialComponentsModule, SportResultModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
