import { Country } from "../interfaces/country.interface";
import { RESTCountry } from "../interfaces/rest-countries.interface";


export class CountryMapper {

  static mapRestCountryToCountry(restCountry: RESTCountry): Country {

    return {
      cca2: restCountry.cca2,
      flag: restCountry.flag,
      flagSvg: restCountry.flags.svg,
      name: restCountry.name.common,
      capital: restCountry.capital.join(','),
      population: restCountry.population
    };

  }

  static mapRestCountryItemsToCountryArray(restCountryItems: RESTCountry[]): Country[] {
    return restCountryItems.map(this.mapRestCountryToCountry);
  }

}
