import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  name: string;
  searchResult: any;
  constructor(private http: HttpClient) { }

  getProductFromInput(http: HttpClient): void{
    this.http
    .get<any>('https://us.openfoodfacts.org/cgi/search.pl?action=process&tagtype_0=categories&tag_contains_0=contains&tag_0=' + name + '&tagtype_1=nutrition_grades&tag_contains_1=contains&tag_1=A&additives=without&ingredients_from_palm_oil=without&json=true')
    .subscribe(
      (data) => {
        this.searchResult = data;
      }
    );
  }

  ngOnInit(): void {
  }

}
