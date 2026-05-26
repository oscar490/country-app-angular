import { HttpClient } from "@angular/common/http";
import { inject, Injectable, signal } from "@angular/core";
import { RESTCountry } from "../interfaces/rest-countries.interface";
import { catchError, delay, map, Observable, tap, throwError } from "rxjs";
import { CountryMapper } from "../mappers/country.mapper";
import { Country } from "../interfaces/country.interface";
import { rxResource } from '@angular/core/rxjs-interop';

const API_URL = 'https://restcountries.com/v3.1';

@Injectable({providedIn: 'root'})
export class CountryService {

  private http = inject(HttpClient);


  searchByCapital(query: string): Observable<Country[]> {
    query = query.toLowerCase();

    return this.http.get<RESTCountry[]>(`${API_URL}/capital/${query}`).pipe(
      delay(3000),
      map(response => CountryMapper.mapRestCountryItemsToCountryArray(response)),
      catchError(error => {
        return throwError(() => new Error(`No se puedo obtener paises con ese query ${query}.`));
      })
    )
  }

  searchByName(query: string): Observable<Country[]> {

    return this.http.get<RESTCountry[]>(`${API_URL}/name/${query}`).pipe(
      delay(3000),
      map(response => CountryMapper.mapRestCountryItemsToCountryArray(response)),
      catchError(error => {
        return throwError(() => new Error(`No se puedo obtener paises con ese query ${query}.`));
      })
    )
  }

  searchCountryByAlphaCode(code: string | null): Observable<Country | undefined> {

    return this.http.get<RESTCountry[]>(`${API_URL}/alpha/${code}`).pipe(
      delay(3000),
      map(response => CountryMapper.mapRestCountryItemsToCountryArray(response)),
      map(countries => countries.at(0)),
      catchError(error => {
        return throwError(() => new Error(`No se puedo obtener paises con ese código ${code}.`));
      })
    )
  }
}
