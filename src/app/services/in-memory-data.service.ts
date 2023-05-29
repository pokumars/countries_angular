import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import countriesJSON from '../../../instructions/data.json';
import { Country } from '../models/country';



@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {


  createDb() {
    let countries = countriesJSON;
    return { countries };
  }
}
