import { Injectable } from '@angular/core';
import { HttpModule, Http } from '@angular/http';

import 'rxjs/Rx';


@Injectable()
export class ApiService {
  results:string;
  constructor(private http:Http) { }

  convertTextToSpeech(textToConvert : string) {
    // alert(textToConvert);
    var headers = new Headers({'Ocp-Apim-Subscription-Key': 'decd0a3d9a5742c9aca5a18066ea65b8'});

    this.http.post("https://api.cognitive.microsoft.com/sts/v1.0/issueToken",
    "",headers).subscribe(data => {
      // Read the result field from the JSON response.
     this.results=data.text.toString();
     console.log(this.results);
    });
  }
}
