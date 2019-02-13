import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
    appareilOne = 'machine à laver';
    appareilTwo = 'machine à bois';
    appareilThree = 'machine à manger';

    isAuth = false;
    constructor() {
      setTimeout(
          () => {
              this.isAuth = true;
          }, 4000
      );
    }
    onAllumer() {
    console.log('allumer!');
    }
}
