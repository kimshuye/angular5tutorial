import { Component, OnInit } from '@angular/core';
import { Movie } from '../../models/movie';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  // REST API
  // movies: Movie[] = [];

  // Angular Firebase
  movies: any;

  constructor(private movieService: MovieService) { }

  ngOnInit() {
    this.getMovies();
  }

  getMovies(){
    // REST API
    // this.movieService.getMovies().subscribe(movies => this.movies = movies.slice(1,5) );

    // Angular Firebase
    this.movies = this.movieService.getMovies().snapshotChanges().map(changes => {
      return changes.map(c => ({ ...c.payload.val() })).slice(0,4);
    });
  }

}
