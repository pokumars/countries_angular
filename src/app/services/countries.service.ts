import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError, of } from 'rxjs';
import { catchError, retry, tap } from 'rxjs/operators';
import { Country } from '../models/country';


@Injectable({
  providedIn: 'root'
})
export class CountriesService {
  private countriesUrl = 'api/countries'

  constructor(private http: HttpClient,) { }


  getAllCountries(): Observable<Array<Country>> {
    return this.http.get<Array<Country>>(this.countriesUrl)
      .pipe(
        tap(_ => console.log('fetched countries')),
        catchError(this.handleError<Country[]>('getAllCountries', []))
      )
  }


  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    }
  }
}


