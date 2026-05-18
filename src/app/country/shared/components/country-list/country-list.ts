import { Component, input } from "@angular/core";

@Component({
  selector: 'country-list',
  templateUrl: './country-list.html'
})

export class CountryList {

  valueSearch = input();

}
