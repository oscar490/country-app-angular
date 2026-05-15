import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TopMainComponent } from "../../components/top-main/top-main.component";


@Component({
  selector: 'app-country-layout',
  imports: [RouterOutlet, TopMainComponent],
  templateUrl: './CountryLayout.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class CountryLayout {}
