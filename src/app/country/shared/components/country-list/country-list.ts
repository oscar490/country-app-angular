import { DecimalPipe } from '@angular/common';
import { Component, input } from "@angular/core";
import { RESTCountry } from "../../../interfaces/rest-countries.interface";
import { Country } from "../../../interfaces/country.interface";
import { RouterLink } from "@angular/router";


@Component({
  selector: 'country-list',
  templateUrl: './country-list.html',
  imports: [DecimalPipe, RouterLink]
})

export class CountryList {

  countries = input.required<Country[]>();

  errorMessage = input<string | null>()
  isLoading = input<boolean>(false);
  isEmpty = input<boolean>(false);

}
