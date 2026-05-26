import { CountryService } from './../../services/country.service';
import { Component, inject, signal } from "@angular/core";
import { CountrySearchInput } from "../../shared/components/country-search-input/country-search-input";
import { CountryList } from "../../shared/components/country-list/country-list";
import { Country } from '../../interfaces/country.interface';
import { AlertErrorComponent } from '../../shared/components/alert/alert-error.component';

@Component({
  selector: 'by-country',
  templateUrl: './by-country-page.component.html',
  imports: [CountrySearchInput, CountryList, AlertErrorComponent]
})

export class ByCountryPageComponent {

  countryService = inject(CountryService);

  countries = signal<Country[]>([]);
  isError = signal<string | null>(null);
  isLoading = signal<boolean>(false);

  onSearchCountry(query: string) {

    this.isLoading.set(true);
    this.isError.set(null);
    this.countries.set([]);

    this.countryService.searchByName(query).subscribe({
      next: (countries) => {
        this.countries.set(countries)
        this.isError.set(null);
        this.isLoading.set(false);
      },
      error: (error) => {
        this.countries.set([]);
        this.isError.set(error);
        this.isLoading.set(false);
      }
    })
  }

}
