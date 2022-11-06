import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  image: string;

  constructor() {}

  signImage(event) {
    this.image = event;
    console.log(this.image);
  }

}

