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
      {display : "Home", location : "/"},
      {display : "About", location : "/about"},
      {display : "Projects", location : "/projects"},
      {display : "Contact", location : "/contact"},
    ];
  }
}
