import { Component, input } from "@angular/core";
import { RESTCountry } from "../../../interfaces/rest-countries.interface";
import { Country } from "../../../interfaces/country.interface";
import { DecimalPipe } from "@angular/common";

@Component({
  selector: 'country-list',
  templateUrl: './country-list.html',
  imports: [DecimalPipe]
})

export class CountryList {

  countries = input.required<Country[]>();

}
