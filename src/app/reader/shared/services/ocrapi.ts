import { Injectable } from '@angular/core';
import { Http, Response } from "@angular/http";
import { Headers, RequestOptions } from "@angular/http";
import 'rxjs/Rx';
import {Observable} from 'rxjs/Rx';
@Injectable()
export class OCRAPI
{ 
    requesturl='https://westcentralus.api.cognitive.microsoft.com/vision/v1.0/ocr?language=unk&detectOrientation =true';
    subscriptionKey:string="60c88c22c13e4e038e92ffd7503ea57b" 
    private headers: Headers;
    constructor(private http:Http)
    {
    this.headers = new Headers({ "Content-Type": "application/octet-stream" });
        
this.headers.append("Ocp-Apim-Subscription-Key",this.subscriptionKey);
    }
    readTextFromImage()
    {let options = new RequestOptions({ headers: this.headers });
     let imageUrl= "https://image.slidesharecdn.com/opticalcharacterrecognitionforbanglahandwrittentext-120207073409-phpapp02/95/optical-character-recognition-for-bangla-handwritten-text-4-728.jpg?cb=1328600115"
         return this.http.post(this.requesturl, JSON.stringify({ url: imageUrl}), options)
            .map(res => res.json());
    }
    readTextFromImageBytes(array: Uint8Array)
    {
let options = new RequestOptions({ headers: this.headers });
     //let imageUrl= "https://image.slidesharecdn.com/opticalcharacterrecognitionforbanglahandwrittentext-120207073409-phpapp02/95/optical-character-recognition-for-bangla-handwritten-text-4-728.jpg?cb=1328600115"
          let blob = new Blob( [ array ], { type: "image/jpeg" } );
         return this.http.post(this.requesturl,blob, options)
            .map(res => res.json());
    }
}