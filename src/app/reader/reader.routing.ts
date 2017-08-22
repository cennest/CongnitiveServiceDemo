import { Routes, RouterModule } from '@angular/router';

import { ImageTextComponent } from './image-text/image-text.component';

const readerRoutes: Routes = [
    { path: 'home', component: ImageTextComponent, },
];

export const readerRouting = RouterModule.forChild(readerRoutes);
