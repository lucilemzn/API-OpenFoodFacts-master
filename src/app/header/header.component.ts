import { Component, OnInit } from '@angular/core';
import {​​​​​ Router }​​​​​ from '@angular/router';
import { ItemMenu } from '../classes/item-menu';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router) { }
  itemsMenu = new Array<ItemMenu>();

  ngOnInit(): void {

    this.itemsMenu.push(new ItemMenu('Accueil', '/', false));
    this.itemsMenu.push(new ItemMenu('Page deux', '/second', false));
  }

  getLogoURL(): string {

    return 'assets/logo2.png';
  }
}
