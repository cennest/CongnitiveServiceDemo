import { Component } from '@angular/core';
import { OCRAPI } from '../shared/services/index';

@Component({
  selector: 'app-root',
  templateUrl: './image-text.component.html',
  styleUrls: ['./image-text.component.css'],
  providers: [OCRAPI]
})
export class ImageTextComponent {
  title = 'Reader App';
  boolImageTitle = '';
  imgUrl = '';
  textRead = '';

  constructor(private ocrapi: OCRAPI) {
  }

  private readResult(result) {
    let text = '';
    result.regions[0].lines.forEach(element => {
      element.words.forEach(wordElement => {
        text = text + ' ' + wordElement.text;
      });
    });
    this.textRead = text;
    //  alert(JSON.stringify(text));
  }
  private onImportChange(event) {

    // this.ocrapi.readTextFromImage().subscribe(data => this.readResult(data));
    const image = (event.srcElement || event.target).files[0];
    if (image) {
      this.boolImageTitle = image.name;

      const reader = new FileReader();
      reader.onload = (imgevent) => {
        this.imgUrl = (imgevent.srcElement || imgevent.target)['result'];
      };

      reader.readAsDataURL(image);
      const dataReader = new FileReader();

      dataReader.readAsArrayBuffer(image);
      dataReader.onload = () => {
        let arrayBuffer = dataReader.result;
        let bytes = new Uint8Array(arrayBuffer);
        console.log(bytes);
        this.ocrapi.readTextFromImageBytes(bytes).subscribe(data => this.readResult(data));
        //  alert(bytes);
      };
    }
  }

}
