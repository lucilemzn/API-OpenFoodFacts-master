import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-allergen',
  templateUrl: './allergen.component.html',
  styleUrls: ['./allergen.component.css']
})
export class AllergenComponent implements OnInit {

  fetchedData = [];
  filteredData = [];

  randomArray = [];

  constructor(private http: HttpClient) { }


  ngOnInit(): void {
    this.http.get<any>('https://world.openfoodfacts.org/allergens.json').subscribe(data => {
      this.fetchedData = data.tags;
      this.filteredData = this.filtre(this.fetchedData);
      this.getFrenchRandomDataList(this.filteredData);
    });
  }

  getFrenchRandomDataList(data: Array<any>){
    for (let index = 0; index < 10; index++) {
      this.randomArray[index] = this.getRandomData(data);
    }
  }


  filtre(data: Array<any>): Array<any> {
    // tslint:disable-next-line: no-string-literal
    return data.filter(current => current['name'].substr(0, 2).toLowerCase() === 'fr');
  }

  getRandomData(data: Array<any>): Array<any> {
    return data[Math.floor(Math.random() * data.length)];
  }

}
