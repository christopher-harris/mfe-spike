import {NgModule} from '@angular/core';
import {UiComponent} from './ui.component';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatMenuModule} from '@angular/material/menu';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';

const materialModules = [
    MatSidenavModule,
    MatButtonModule,
    MatToolbarModule,
    MatMenuModule,
    MatListModule,
    MatCardModule
];

@NgModule({
    declarations: [
        UiComponent
    ],
    imports: [
        ...materialModules,
    ],
    exports: [
        UiComponent,
        ...materialModules,
    ]
})
export class UiModule {
}
