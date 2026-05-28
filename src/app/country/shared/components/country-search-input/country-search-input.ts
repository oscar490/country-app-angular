import { Component, effect, EventEmitter, input, output, signal } from "@angular/core";

@Component({
  selector: 'country-search-input',
  templateUrl: './country-search-input.html'
})

export class CountrySearchInput {

  value = output<string>();

  placeholderSearch = input<string>('Buscar');

  inputValue = signal<string>("");

  debounceEffect = effect((onCleanup) => {
    const value = this.inputValue();

    const timeout = setTimeout(() => {
      this.value.emit(value);
    }, 500);

    onCleanup(() => {
      clearTimeout(timeout);
    })
  });



}
