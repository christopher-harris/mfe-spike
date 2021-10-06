import { Injectable } from '@angular/core';
import {Routes} from '@angular/router';
import {Microfrontend} from './microfrontend';
import {loadRemoteModule} from '@angular-architects/module-federation';
import {APP_ROUTES} from '../app.routes';

@Injectable({
  providedIn: 'root'
})
export class LookupService {

  lookup(): Promise<Microfrontend[]> {
    const dashboardModule = {
      displayName: 'dashboard',
      routePath: 'http://localhost:3000/remoteEntry.js',
      ngModuleName: './Module'
    };

    return Promise.resolve([
      {
        // For Loading
        remoteEntry: 'http://localhost:3000/remoteEntry.js',
        remoteName: 'dashboard',
        exposedModule: './Module',
        // For Routing
        displayName: 'Dashboard',
        routePath: 'dashboard',
        ngModuleName: 'DashboardModule'
      },
      {
        // For Loading
        remoteEntry: 'http://localhost:3100/remoteEntry.js',
        remoteName: 'mfeAnalytics',
        exposedModule: './Module',
        // For Routing
        displayName: 'Analytics',
        routePath: 'analytics',
        ngModuleName: 'AnalyticsModule'
      }
    ] as Microfrontend[]);

  }

}
