export interface RESTCountry {
  tld:          string[];
  cca2:         string;
  ccn3:         string;
  cca3:         string;
  cioc:         string;
  independent:  boolean;
  status:       string;
  unMember:     boolean;
  idd:          Idd;
  capital:      string[];
  altSpellings: string[];
  region:       string;
  subregion:    string;
  landlocked:   boolean;
  borders:      string[];
  area:         number;
  maps:         Maps;
  population:   number;
  fifa:         string;
  car:          Car;
  timezones:    string[];
  continents:   string[];
  flag:         string;
  name:         Name;
  currencies:   Currencies;
  languages:    Languages;
  latlng:       number[];
  demonyms:     Demonyms;
  translations: { [key: string]: Translation };
  gini:         Gini;
  flags:        Flags;
  coatOfArms:   CoatOfArms;
  startOfWeek:  string;
  capitalInfo:  CapitalInfo;
  postalCode:   PostalCode;
}

export interface CapitalInfo {
  latlng: number[];
}

export interface Car {
  signs: string[];
  side:  string;
}

export interface CoatOfArms {
  png: string;
  svg: string;
}

export interface Currencies {
  EUR: Eur;
}

export interface Eur {
  symbol: string;
  name:   string;
}

export interface Demonyms {
  eng: Eng;
  fra: Eng;
}

export interface Eng {
  f: string;
  m: string;
}

export interface Flags {
  png: string;
  svg: string;
  alt: string;
}

export interface Gini {
  "2018": number;
}

export interface Idd {
  root:     string;
  suffixes: string[];
}

export interface Languages {
  est: string;
}

export interface Maps {
  googleMaps:     string;
  openStreetMaps: string;
}

export interface Name {
  common:     string;
  official:   string;
  nativeName: NativeName;
}

export interface NativeName {
  est: Translation;
}

export interface Translation {
  official: string;
  common:   string;
}

export interface PostalCode {
  format: string;
  regex:  string;
}
