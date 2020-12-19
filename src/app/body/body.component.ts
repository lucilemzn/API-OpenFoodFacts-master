import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  getLogoURL2(): string {

    return 'assets/food.jpg';
  }
  getLogoURL3(): string {

    return 'assets/foodban.jpg';
  }


}
