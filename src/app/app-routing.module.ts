import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { MoviesComponent } from './movies/movies.component';
import { MessagesComponent } from './messages/messages.component';


const routes: Routes = [
  { path: 'movies',component:MoviesComponent},
  { path: 'messages',component:MessagesComponent},
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
