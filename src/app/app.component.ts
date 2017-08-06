import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Reader App';
  boolImageTitle = '';
  imgUrl = '';

  constructor() {

  }

  private onImportChange(event) {
    const image = (event.srcElement || event.target).files[0];
    if (image) {
      this.boolImageTitle = image.name;

      const reader = new FileReader();
      reader.onload = (imgevent) => {
        this.imgUrl = (imgevent.srcElement || imgevent.target)['result'];
      };

      reader.readAsDataURL(image);
    }
  }

}
