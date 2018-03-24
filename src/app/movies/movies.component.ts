import { Component, OnInit, Input, Output } from '@angular/core';
import { Movie } from '../../models/movie';

// import { fakeMovies } from '../fake-movies';
import { MovieService } from '../movie.service';


@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  // movie:Movie = {
  //   id: 1,
  //   name: "Star Wars",
  //   releaseYear: 1977
  // };

  // movies = fakeMovies;

  movies: Movie[];

  constructor(private movieService:MovieService) {  

  }

  getMoviesFromService(){
    // this.movies = this.movieService.getMovies();
    this.movieService.getMovies().subscribe(updatedMovies => this.movies = updatedMovies);
  }

  ngOnInit() {
    this.getMoviesFromService();
  }
  //Action when select a Movie in List item
  selectedMovie: Movie;
  onSelect(movie: Movie): void {
      this.selectedMovie = movie;
      console.log(`selectedMovie = ${JSON.stringify(this.selectedMovie)}`);
      // alert(`selectedMovie = ${JSON.stringify(this.selectedMovie)}`);
  }
}
