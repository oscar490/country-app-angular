import { Component } from "@angular/core";
import { CountrySearchInput } from "../../shared/components/country-search-input/country-search-input";
import { CountryList } from "../../shared/components/country-list/country-list";

@Component({
  selector: 'by-country',
  templateUrl: './by-country-page.component.html',
  imports: [CountrySearchInput, CountryList]
})

export class ByCountryPageComponent {}
