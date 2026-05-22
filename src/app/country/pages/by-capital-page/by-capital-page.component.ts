import { AlertErrorComponent } from './../../shared/components/alert/alert-error.component';
import { Component, inject, signal } from "@angular/core";
import { CountrySearchInput } from "../../shared/components/country-search-input/country-search-input";
import { CountryList } from "../../shared/components/country-list/country-list";
import { CountryService } from "../../services/country.service";
import { Country } from "../../interfaces/country.interface";
import { HttpErrorResponse, httpResource } from "@angular/common/http";


@Component({
  selector: 'by-capital',
  templateUrl: './by-capital-page.component.html',
  imports: [CountrySearchInput, CountryList, AlertErrorComponent]
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

    this.countries.set([]);
    this.isLoading.set(true);
    this.isError.set(null);

    this.countryService.searchByCapital(query).subscribe({
      next: (countries) => {
        this.isLoading.set(false);
        this.countries.set(countries);
      },
      error: (error) => {
        this.isLoading.set(false);
        this.countries.set([]);
        this.isError.set(error);
      },
      complete: () => this.isLoading.set(false)
    })
  }

}
