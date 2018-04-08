import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { Movie } from '../../models/movie';

@Component({
  selector: 'app-movie-search',
  templateUrl: './movie-search.component.html',
  styleUrls: ['./movie-search.component.css']
})
export class MovieSearchComponent implements OnInit {
  
  // Angular Firebase
  movies: any;

  searchText;

  searchMovies;

  constructor(private movieService:MovieService) { }

  ngOnInit() {
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

  getSearchMovies(searchText){

    this.movieService.findMovies(searchText).subscribe((snap)=>{
      this.movies = snap;
    });

  }


}
