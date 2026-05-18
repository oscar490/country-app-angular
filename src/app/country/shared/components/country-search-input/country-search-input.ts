import { Component, EventEmitter, input, output } from "@angular/core";

@Component({
  selector: 'country-search-input',
  templateUrl: './country-search-input.html'
})

export class CountrySearchInput {

  value = output<string>();

  placeholderSearch = input<string>('Buscar');



}
