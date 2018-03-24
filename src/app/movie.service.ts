import { Injectable } from '@angular/core';
import { fakeMovies } from './fake-movies';
import { Movie } from '../models/movie';


@Injectable()
export class MovieService {

  constructor() { }

  getMovies(): Movie[]{
    return fakeMovies;
  }

}
