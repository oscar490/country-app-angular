import { Component, signal } from "@angular/core";
import { CountrySearchInput } from "../../shared/components/country-search-input/country-search-input";
import { CountryList } from "../../shared/components/country-list/country-list";


@Component({
  selector: 'by-capital',
  templateUrl: './by-capital-page.component.html',
  imports: [CountrySearchInput, CountryList]
})

export class ByCapitalPageComponent {

  valueSearch = signal("");

}
