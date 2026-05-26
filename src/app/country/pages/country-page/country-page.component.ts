import { Component, inject, OnInit, signal } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Country } from "../../interfaces/country.interface";
import { CountryService } from "../../services/country.service";
import { NotFoundComponent } from "../../shared/components/not-found/not-found.component";
import { CountryInformationComponent } from "./country-information/country-information.component";

@Component({
  templateUrl: './country-page.component.html',
  imports: [NotFoundComponent, CountryInformationComponent]
})

export class CountryPageComponent implements OnInit {

  countryCode = inject(ActivatedRoute).snapshot.paramMap.get('code');
  countrySerivce = inject(CountryService);

  country = signal<Country | undefined>(undefined);
  isError = signal<string | null>(null);
  isLoading = signal<boolean>(false)

  ngOnInit(): void {

    this.isLoading.set(true);

    this.countrySerivce.searchCountryByAlphaCode(this.countryCode).subscribe({
      next: (country) => {
        this.isLoading.set(false);
        this.country.set(country)
      },
      error: (error) => {
        this.isLoading.set(false);
        this.isError.set(error)
      }
    });
  }


}
