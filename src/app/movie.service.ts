import { Injectable } from '@angular/core';
// import { fakeMovies } from './fake-movies';
import { Movie } from '../models/movie';

import { environment } from '../environments/environment';
import { AngularFireDatabase , AngularFireList } from 'angularfire2/database';

//Get data asynchronously with Observable
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

//MessageService
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class MovieService {

  private moviesURL = environment.firebase.databaseURL;

  movies : AngularFireList<Movie>;
  thisMovies: Observable<any>;

  constructor(
    private db: AngularFireDatabase,
    private http:HttpClient,
    public messageService: MessageService
  ) { }

  // REST API
  getMovies() : Observable <Movie[]>{
    
  // Angular Firebase
  // getMovies(){

    // Fake Data
    // this.messageService.add(`${ new Date().toLocaleString()}. Get movie list`);
    // return of(fakeMovies);

    // REST API
    return this.http.get<Movie[]>(this.moviesURL + '/movies/' + '.json')
    .pipe(
      tap(receivedMovies => console.log(`receivedMovies = ${JSON.stringify(receivedMovies)}`)),
      catchError(error => of([]))
    );

    // General code Angular Fire Database
    // this.movies = this.db.list<Movie>("movies");
    // console.log('receivedMovies = ' + this.movies);
    // return this.movies;
  }

  getMovieFromId(id: string): Observable<Movie> { 
    // Fake Data
    // return of(fakeMovies.find(movie => movie.id === id));

    const url = `${this.moviesURL}/movies/${id}.json`;

    // REST API  
    return this.http.get<Movie>(url).pipe(
      tap(selectedMovies => console.log(`selected movie = ${JSON.stringify(selectedMovies)}`)),
      catchError(error => of(new Movie() ))
    );

    // Angular Firebase

  }

  updateMovie(movie: Movie): Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type':'application/json; charset=utf-8'})
    };

    const url = `${this.moviesURL}/movies/${movie.id}.json`;

    return this.http.patch<Movie>(url,movie,httpOptions).pipe(
      tap(updataedMovies => console.log(`updataed movie = ${JSON.stringify(updataedMovies)}`)),
      catchError(error => of(new Movie() ))
    );

  }

}
