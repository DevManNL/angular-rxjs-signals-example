//import 'zone.js/dist/zone';  // Required for Stackblitz
import { Component, inject } from '@angular/core';
import { RouterLinkActive, RouterLink, RouterOutlet } from '@angular/router';

@Component({
    selector: 'pm-root',
    imports: [RouterLinkActive, RouterLink, RouterOutlet],
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
  pageTitle = 'Acme Product Management';

  cartCount = 0;

}
