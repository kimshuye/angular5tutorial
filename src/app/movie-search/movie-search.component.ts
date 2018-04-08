import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { Movie } from '../../models/movie';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

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

  movies$: Observable<any>;
  private searchedSubject = new Subject<any>();

  constructor(private movieService:MovieService) { }

  ngOnInit() {
    this.getSearchMovies("");
    
    // this.movies$ = this.searchedSubject.pipe(
    //   debounceTime(300), // wait 300ms after each keystroke before considering the searched string
    //   distinctUntilChanged(),// ignore new string if same as previous string
    //   switchMap((searchedString: string) => this.movieService.findMovies(searchedString))
    // );
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

  getSearchMovies(searchText,charsensitive:boolean = false){

    this.movieService.findMovies(searchText,charsensitive).subscribe((snap)=>{
      this.movies = snap;
    });

  }

  search(searchedString: string): void {    
    console.log(`searchedString = ${searchedString}`);
    this.searchedSubject.next(searchedString);
  }


}
