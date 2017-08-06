import { Component, OnInit } from '@angular/core';
import { ApiService } from "../services/api.service";


@Component({
  selector: 'text-to-speech',
  templateUrl: './text-to-speech.component.html',
  styleUrls: ['./text-to-speech.component.css']
})
export class TextToSpeechComponent implements OnInit {

textToConvert:string;
  constructor(private apiService: ApiService) { 
  }
  convertToAudioBtnClicked() {
      this.textToConvert = (<HTMLTextAreaElement>document.getElementById("txtArea")).value;

    this.apiService.convertTextToSpeech(this.textToConvert);
}
  ngOnInit() {
    
  }
  

}
