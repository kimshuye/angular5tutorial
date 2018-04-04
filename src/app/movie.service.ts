import { Injectable } from '@angular/core';
import { fakeMovies } from './fake-movies';
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
  movie: Observable<any>;

  moviespath: string = "movies";

  constructor(
    private db: AngularFireDatabase,
    private http:HttpClient,
    public messageService: MessageService
  ) { }

  // getMovies() : Observable <Movie[]>{
  getMovies() {

    // Fake Data
    // this.messageService.add(`${ new Date().toLocaleString()}. Get movie list`);
    // return of(fakeMovies);

    // REST API
    // return this.http.get<Movie[]>(this.moviesURL + '/movies/' + '.json').pipe(
    //   tap(receivedMovies => console.log(`receivedMovies = ${JSON.stringify(receivedMovies)}`)),
    //   catchError(error => of([]))
    // );

    // General code Angular Fire Database
    this.movies = this.db.list<Movie>(this.moviespath);
    console.log('receivedMovies = ' + JSON.stringify(this.movies));
    return this.movies;
    
  }

  getMovieFromId(id: number): Observable<Movie> {    
    // return of(fakeMovies.find(movie => movie.id === id));

    // Angular Firebase
    this.movie = this.db.object<Movie>(this.moviespath + "/" + id ).snapshotChanges()
    .map(c => ({ ...c.payload.val() }));
    return this.movie;
  }

  updateMovie(movie: Movie) {
    var Editproduct = JSON.parse(JSON.stringify( movie )); //remotes the undefined fields

    var updates = {};
    updates['/' + this.moviespath + '/' + movie.id] = movie;
    console.log('updated Movie = ' + JSON.stringify(updates));
    return this.db.database.ref().update(updates);
  }

}
