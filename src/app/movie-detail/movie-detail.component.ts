import { Component, OnInit, Input ,Output } from '@angular/core';
import { Movie } from '../../models/movie';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {

  @Input()@Output() movie:Movie = {
    id: 1,
    name: "Star Wars",
    releaseYear: 1977
  };
  
  constructor() { }

  ngOnInit() {
  }

}
