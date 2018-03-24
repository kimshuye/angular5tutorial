import { Injectable } from '@angular/core';
import { fakeMovies } from './fake-movies';
import { Movie } from '../models/movie';

//Get data asynchronously with Observable
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable()
export class MovieService {

  constructor() { }

  getMovies(): Observable<Movie[]>{
    return of(fakeMovies);
  }

}
