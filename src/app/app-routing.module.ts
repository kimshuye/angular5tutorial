import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { MoviesComponent } from './movies/movies.component';
import { MessagesComponent } from './messages/messages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { Movie } from '../models/movie';


const routes: Routes = [
  { path: '',redirectTo:'/dashboard',pathMatch: 'full'},
  { path: 'dashboard',component:DashboardComponent},
  { path: 'movies',component:MoviesComponent},
  { path: 'messages',component:MessagesComponent},
  { path: 'detail/:id',component:MovieDetailComponent},
];

@NgModule({

  // declarations : [],

  imports: [
    // CommonModule,
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
