import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../services/countries.service';

@Component({
  selector: 'app-inputs',
  templateUrl: './inputs.component.html',
  styleUrls: ['./inputs.component.css']
})
export class InputsComponent implements OnInit {
  constructor(private countriesService: CountriesService) { }

  ngOnInit(): void {
    this.countriesService.getAllCountries()
      .subscribe(countries => console.log('fetched countries.length', countries.length, countries[5]))
  }

}
