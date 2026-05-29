import { HttpClient } from "@angular/common/http";
import { inject, Injectable, signal } from "@angular/core";
import { RESTCountry } from "../interfaces/rest-countries.interface";
import { catchError, delay, map, Observable, of, tap, throwError } from "rxjs";
import { CountryMapper } from "../mappers/country.mapper";
import { Country } from "../interfaces/country.interface";

const API_URL = 'https://restcountries.com/v3.1';

@Injectable({providedIn: 'root'})
export class CountryService {

  private http = inject(HttpClient);
  private queryCacheCapital = new Map<string, Country[]>();
  private queryCacheCountry = new Map<string, Country[]>();
  private queryCacheRegion = new Map<string, Country[]>();


  searchByCapital(query: string): Observable<Country[]> {
    query = query.toLowerCase();

    if (this.queryCacheCapital.has(query)) {
      return of(this.queryCacheCapital.get(query) ?? []);
    }

    console.log(`Llegando al servidor por ${query}`);

    return this.http.get<RESTCountry[]>(`${API_URL}/capital/${query}`).pipe(
      delay(3000),
      map(response => CountryMapper.mapRestCountryItemsToCountryArray(response)),
      tap((countries) => this.queryCacheCapital.set(query, countries)),
      catchError(error => {
        return throwError(() => new Error(`No se puedo obtener paises con ese query ${query}.`));
      })
    )
  }

  searchByName(query: string): Observable<Country[]> {

    if (this.queryCacheCountry.has(query)) {
      return of(this.queryCacheCountry.get(query) ?? []);
    }

    return this.http.get<RESTCountry[]>(`${API_URL}/name/${query}`).pipe(
      delay(3000),
      map(response => CountryMapper.mapRestCountryItemsToCountryArray(response)),
      tap((countries) => this.queryCacheCountry.set(query, countries)),
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

  searchByRegion(region: string): Observable<Country[]> {

    if (this.queryCacheRegion.has(region)) {
      return of(this.queryCacheRegion.get(region) ?? []);
    }

    return this.http.get<RESTCountry[]>(`${API_URL}/region/${region}`).pipe(
      delay(3000),
      map(response => CountryMapper.mapRestCountryItemsToCountryArray(response)),
      tap((countries) => this.queryCacheRegion.set(region, countries)),
      catchError(error => {
        return throwError(() => new Error(`No se puedo obtener paises con esa región ${region}.`));
      })
    )
  }
}
