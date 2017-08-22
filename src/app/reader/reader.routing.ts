import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ImageTextComponent } from './image-text/image-text.component';

const readerRoutes: Routes = [
    { path: 'home', component: ImageTextComponent, },
];

export const groceriesRouting: ModuleWithProviders = RouterModule.forChild(readerRoutes);
