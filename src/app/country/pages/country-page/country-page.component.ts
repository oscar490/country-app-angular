import { Component, inject, signal } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { map } from "rxjs";

@Component({
  templateUrl: './country-page.component.html'
})

export class CountryPageComponent {

  private router = inject(ActivatedRoute);

  code = signal('');

  constructor() {
    this.router.params.subscribe((params) => {
      this.code.set(params['code']);
    })
  }

}
