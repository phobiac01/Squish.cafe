import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent {
  links: {};

  constructor () {
    this.links = [
      {display : "Home", location : "#"},
      {display : "My Urls", location : "#"},
      {display : "API", location : "#"},
    ];
  }
}
