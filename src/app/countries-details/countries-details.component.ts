import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import {FormsModule} from '@angular/forms';
import { COUNTRIES } from '../mock.countries'

@Component({
  selector: 'app-countries-details',
  templateUrl: './countries-details.component.html',
  styleUrl: './countries-details.component.css',
})
export class CountriesDetailsComponent {
  title = "Countries Details"
  countries = COUNTRIES;
}
