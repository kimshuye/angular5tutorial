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

  // REST API
  // movies: Movie[];

  // Angular Firebase
  movies: any;
  
  constructor(private movieService:MovieService) {  

  }

  ngOnInit() {
    this.getMoviesFromService();
  }

  getMoviesFromService(){
    // Get Fake Data
    // this.movies = this.movieService.getMovies();
    
    // REST API
    // this.movieService.getMovies().subscribe(updatedMovies => this.movies = updatedMovies.slice(1));

    // Angular Firebase
    // this.movieService.getMovies().valueChanges().subscribe(snapMovies => {
    //   this.movies = snapMovies;
    // });

    this.movies = this.movieService.getMovies().snapshotChanges().map(changes => {
      return changes.map(c => ({ id:c.key,...c.payload.val() }));
    });

  }
  
  //Action when select a Movie in List item
  selectedMovie: Movie;

  onSelect(movie: Movie): void {
    // Angular Firebase
    this.selectedMovie = movie;
    console.log(`selectedMovie = ${JSON.stringify(this.selectedMovie)}`);
    // alert(`selectedMovie = ${JSON.stringify(this.selectedMovie)}`);
  }

  updateMovie():void{
    this.movieService.updateMovie(this.selectedMovie).then(()=>{ this.selectedMovie=null; });    
  }
  
  // Action when insert a Movie in List item
  newMovie: Movie;
  // add new movie

  addMovie(name: string, releaseYear:string): void {
    name = name.trim();
    if (Number.isNaN(Number(releaseYear)) || !name || Number(releaseYear) === 0) {
      alert('Name must not be blank, Release year must be a number');
      return;
    }
    let insertmovie = {
      name:name,
      releaseYear:Number(releaseYear)
    }
    
    this.movieService.addMovie(insertmovie);
    
  }

  deleteMovie(movieId){
    // this.movies = this.movieService.deleteMovie(movieId).snapshotChanges().map(changes => {
    //   return changes.map(c => ({ id:c.key,...c.payload.val() }));
    // });
    this.movieService.deleteMovie(movieId);
  }

}
