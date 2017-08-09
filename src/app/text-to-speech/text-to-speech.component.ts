import { Component, OnInit } from '@angular/core';
import { ApiService } from "../services/api.service";
import { wav } from 'wav';
import { Speaker } from 'speaker';

@Component({
  selector: 'text-to-speech',
  templateUrl: './text-to-speech.component.html',
  styleUrls: ['./text-to-speech.component.css']
})
export class TextToSpeechComponent {

  textToConvert: string;
  audioContext: AudioContext;
  curBuffer;

  constructor(private apiService: ApiService) {
    this.audioContext = new AudioContext();
  }

  convertToAudioBtnClicked() {
    this.textToConvert = (<HTMLTextAreaElement>document.getElementById("txtArea")).value;

    this.apiService.getToken().subscribe(data => {
      this.onTokenReceived(data, this.textToConvert);
    });
  }

  onTokenReceived(token, text) {
    this.apiService.convertTextToSpeech(token, text).subscribe(data => {
      console.log(data);
      this.audioContext.decodeAudioData(data, (buf) => {
        let bufferSource = this.audioContext.createBufferSource();
        bufferSource.buffer = buf;
        bufferSource.connect(this.audioContext.destination);
        bufferSource.start(0);
      });
    });
  }
}
