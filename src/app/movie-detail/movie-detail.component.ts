import { Component, OnInit, Input ,Output } from '@angular/core';
import { Movie } from '../../models/movie';

// Router
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { MovieService } from '../movie.service';


@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {

  @Input()@Output() movie: Movie;
  
  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getMovieFromRoute();
  }

  getMovieFromRoute(): void {
    const id = this.route.snapshot.paramMap.get('id');
    console.log(`this.route.snapshot.paramMap = ${JSON.stringify(this.route.snapshot.paramMap)}`);
    //Call service to "get movie from id" ?
    this.movieService.getMovieFromId(id).subscribe(movie => this.movie = movie);          
  }

  save():void{
    this.movieService.updateMovie(this.movie).subscribe(() => this.goBack());
  }

  goBack(): void {
    this.location.back();
  }

}
