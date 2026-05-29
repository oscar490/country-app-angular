import { Component, inject, signal } from "@angular/core";
import { CountryList } from "../../shared/components/country-list/country-list";
import { Region } from "../../interfaces/region.type";
import { CountryService } from "../../services/country.service";
import { Country } from "../../interfaces/country.interface";

@Component({
  templateUrl: './by-region-page.component.html',
  imports: [CountryList]
})

export class ByRegionPageComponent {

  countryService = inject(CountryService);

   public regions: Region[] = [
    'Africa',
    'Americas',
    'Asia',
    'Europe',
    'Oceania',
    'Antarctic',
  ];

  selectedRegion = signal<string>("");

  isLoading = signal(false);
  isError = signal<string | null>(null);
  countries = signal<Country[]>([]);


  selectRegion(region: Region) {
    this.selectedRegion.set(region);

    this.isLoading.set(true);
    this.countries.set([]);
    this.isError.set(null);

    this.countryService.searchByRegion(region).subscribe({
      next: (countries) => {
        this.countries.set(countries);
        this.isLoading.set(false);
      },
      error: (error) => {
        this.isError.set(error);
        this.isLoading.set(false);
      }
    })
  }

}
