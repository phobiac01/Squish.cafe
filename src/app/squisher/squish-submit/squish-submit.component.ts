import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-squish-submit',
  templateUrl: './squish-submit.component.html',
  styleUrls: ['./squish-submit.component.css']
})
export class SquishSubmitComponent implements OnInit {
  squishbarPlaceholder: String;
  onEdit: any;

  constructor() {
    this.squishbarPlaceholder = "https://www.squish.cafe/templateUrl/";
    this.onEdit = function(value) {
      console.log(value);
    };
  }

  ngOnInit(): void {
  }
}
