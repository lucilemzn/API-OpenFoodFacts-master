import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent implements OnInit {

  brandData: any = [];
  randomArray = [];

  constructor(private http: HttpClient) { }


  ngOnInit(): void {
    this.http.get<any>('https://world.openfoodfacts.org/brands.json').subscribe(data => {
      this.brandData = data.tags;
      this.getFrenchRandomDataList(this.brandData);
      console.log(this.brandData);
    });
  }

  getFrenchRandomDataList(data: Array<any>){
    for (let index = 0; index < 10; index++) {
      this.randomArray[index] = this.getRandomData(data);
    }
  }
  getRandomData(data: Array<any>): Array<any> {
    return data[Math.floor(Math.random() * data.length)];
  }

}
