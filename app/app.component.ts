import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: 
  `
<h1>Component Router</h1>
  <nav>
    <a routerLink="/heroes" routerLinkActive="active">Heroes List</a>
  </nav>
  <router-outlet></router-outlet>
`

})

export class AppComponent {

  

}
