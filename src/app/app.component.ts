import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-progressbar></app-progressbar>
    <router-outlet></router-outlet>
  `,
  styles: ['']
})
export class AppComponent {
}
