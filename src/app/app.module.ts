import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule }   from '@angular/router';
import { AppComponent } from './app.component';
import { TextToSpeechComponent } from './text-to-speech/text-to-speech.component';
import { ApiService } from "./services/api.service";
import { HttpModule }    from '@angular/http';


@NgModule({
  declarations: [
    AppComponent,
    TextToSpeechComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot([
  {
    path: 'texttospeech',
    component: TextToSpeechComponent
  }
])

  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})


export class AppModule { }
