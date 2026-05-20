import { Component, inject, signal } from "@angular/core";
import { CountrySearchInput } from "../../shared/components/country-search-input/country-search-input";
import { CountryList } from "../../shared/components/country-list/country-list";
import { CountryService } from "../../services/country.service";
import { Country } from "../../interfaces/country.interface";


@Component({
  selector: 'by-capital',
  templateUrl: './by-capital-page.component.html',
  imports: [CountrySearchInput, CountryList]
})

export class ByCapitalPageComponent {

  countryService = inject(CountryService);

  isLoading = signal(false);
  isError = signal<string | null>(null);
  countries = signal<Country[]>([]);

  onSearch(query: string) {

    if (this.isLoading()) {
      return;
    }

    this.isLoading.set(true);
    this.isError.set(null);

    this.countryService.searchByCapital(query).subscribe(countries => {
      this.isLoading.set(false);
      this.countries.set(countries);
      console.log(countries);
    })
  }

}
