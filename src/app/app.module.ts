import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ImageTextComponent } from "./reader/image-text/image-text.component";

@NgModule({
  declarations: [
    ImageTextComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [ImageTextComponent]
})
export class AppModule { }
