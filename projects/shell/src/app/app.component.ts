import {Component, OnInit} from '@angular/core';
import {Microfrontend} from './services/microfrontend';
import {LookupService} from './services/lookup.service';
import {Router} from '@angular/router';
import {buildRoutes} from '../menu-utils';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  frontends: Microfrontend[] = [];

  constructor(private router: Router,
              private lookupService: LookupService) {

  }

  async ngOnInit(): Promise<void> {
    this.frontends = await this.lookupService.lookup();
    const routes = buildRoutes(this.frontends);
    this.router.resetConfig(routes);
    console.log(this.router.config);
  }

}
