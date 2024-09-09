import { Routes } from '@angular/router';
import { WorldComponent } from './world/world.component';

export const routes: Routes = [
    { path: 'worldmap', component: WorldComponent },
    { path: '', redirectTo: '/worldmap', pathMatch:'full'}
];