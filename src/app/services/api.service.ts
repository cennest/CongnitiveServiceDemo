import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';

import 'rxjs/Rx';

@Injectable()
export class ApiService {

  constructor(private http: Http) { }

  getToken() {
    const url = 'https://api.cognitive.microsoft.com/sts/v1.0/issueToken';

    let headers = new Headers({ "Content-Type": "application/json" });
    headers.append("Accept", "application/json");
    headers.append("Ocp-Apim-Subscription-Key", 'decd0a3d9a5742c9aca5a18066ea65b8');

    let options = new RequestOptions({ headers: headers });

    // alert(textToConvert);
    return this.http.post(url, {}, options).map(data => data.text());
  }

  convertTextToSpeech(token: string, textToConvert: string) {
    const url = 'https://speech.platform.bing.com/synthesize';

    let headers = new Headers({ 'Content-Type': 'application/ssml+xml' });
    headers.append('X-Microsoft-OutputFormat', 'riff-16khz-16bit-mono-pcm');
    headers.append('Authorization', `Bearer ${token}`);
    headers.append('X-Search-AppId', '07D3234E49CE426DAA29772419F436CA');
    headers.append('X-Search-ClientID', '1ECFAE91408841A480F00935DC390960')

    let options = new RequestOptions({ headers: headers });

    // alert(textToConvert);
    return this.http.post(url, `<speak version="1.0" xml:lang="en-US">
    <voice xml:lang="en-US" xml:gender="Female" name="Microsoft Server Speech Text to Speech Voice (en-US, ZiraRUS)">${textToConvert}</voice>
</speak>`
      , options).map(data => data.arrayBuffer());
  }
}
