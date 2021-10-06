import {Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {loadRemoteModule} from '@angular-architects/module-federation';

export const APP_ROUTES: Routes = [
    {
        path: '',
        component: HomeComponent,
        pathMatch: 'full'
    },
    // {
    //     path: 'dashboard',
    //     loadChildren: () =>
    //         loadRemoteModule({
    //             remoteName: 'dashboard',
    //             exposedModule: './Module'
    //         }).then(m => m.DashboardModule)
    // },
];
