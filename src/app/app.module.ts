import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { routing } from './app.routing';
import { ReaderModule } from './reader/reader.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    routing,
    ReaderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
