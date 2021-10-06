import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {loadRemoteModule} from '@angular-architects/module-federation';

const URL = 'http://localhost:3000/remoteEntry.js';

const routes: Routes = [
  {
    path: 'dashboard',
    loadChildren: () => loadRemoteModule({
      remoteEntry: URL,
      remoteName: 'dashboard',
      exposedModule: './Module'
    }).then(m => m.DashboardModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
