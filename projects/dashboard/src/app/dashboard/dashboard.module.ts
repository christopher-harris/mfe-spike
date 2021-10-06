import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DashboardComponent} from './dashboard.component';
import {RouterModule} from '@angular/router';
import {DASHBOARD_ROUTES} from './dashboard.routes';
import {UiModule} from 'ui-lib';


@NgModule({
    declarations: [
        DashboardComponent
    ],
    imports: [
        CommonModule,
        UiModule,
        RouterModule.forChild(DASHBOARD_ROUTES),
    ]
})
export class DashboardModule {
}
