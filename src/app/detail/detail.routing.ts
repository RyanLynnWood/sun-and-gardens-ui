

import {Routes, RouterModule} from '@angular/router'
import {DetailComponent} from "./detail.component";


const detailRoutes: Routes = [
    {
        path: 'detail/:id',
        component: DetailComponent
    }
];


export const detailRouting = RouterModule.forChild(detailRoutes);
