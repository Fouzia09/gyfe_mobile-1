import { AuthenticationService } from './../../services/authentication.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  constructor(
    private auth: AuthenticationService,
  ) {}

  isLogged(){
    this.auth.isLogged();
  }

}
