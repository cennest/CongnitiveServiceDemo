import { Component } from '@angular/core';
import {OCRAPI } from '../shared/services/index';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
   providers: [OCRAPI]
})
export class AppComponent {
  title = 'Reader App';
  boolImageTitle = '';
  imgUrl = '';

  constructor(private ocrapi: OCRAPI) {

  }

private readResult(result)
{
  alert(JSON.stringify(result));
}
  private onImportChange(event) {

this.ocrapi.readTextFromImage().subscribe(data => this.readResult(data));
    /*const image = (event.srcElement || event.target).files[0];
    if (image) {
      this.boolImageTitle = image.name;

      const reader = new FileReader();
      reader.onload = (imgevent) => {
        this.imgUrl = (imgevent.srcElement || imgevent.target)['result'];
      };

      reader.readAsDataURL(image);
    }*/
  }

}
