import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { readerRouting } from './reader.routing';

import { ImageTextComponent } from './image-text/image-text.component';

@NgModule({
    imports: [readerRouting],
    declarations: [ImageTextComponent],
    schemas: [NO_ERRORS_SCHEMA]
})

export class ReaderModule { }
