import { Routes } from "@angular/router";
import { ByCapitalPageComponent } from "./pages/by-capital-page/by-capital-page.component";
import { CountryLayout } from "./layouts/CountryLayout/CountryLayout";
import { ByCountryPageComponent } from "./pages/by-pais-page/by-country-page.component";


export const countryRoutes: Routes = [

  {
    path: '',
    component: CountryLayout,
    children: [
      {
        path: 'by-capital',
        component: ByCapitalPageComponent
      },
      {
        path: 'by-country',
        component: ByCountryPageComponent
      },
      {
        path: '**',
        redirectTo: 'by-capital'
      }
    ]
  },


];

export default countryRoutes;
