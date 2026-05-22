import { Component, input } from "@angular/core";


@Component({
  selector: 'alert-error',
  templateUrl: './alert-error.component.html'
})

export class AlertErrorComponent {

  isError = input.required<string | null>();

}
