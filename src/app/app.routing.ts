import {Routes, RouterModule} from '@angular/router';


const appRoutes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    { 
        path: '**',
        redirectTo: 'home' 

    }
];

export const AppRouting = RouterModule.forRoot(appRoutes);
