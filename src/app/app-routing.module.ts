import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { MoviesComponent } from './movies/movies.component';
import { MessagesComponent } from './messages/messages.component';
import { DashboardComponent } from './dashboard/dashboard.component';


const routes: Routes = [
  { path: '',redirectTo:'/dashboard',pathMatch: 'full'},
  { path: 'dashboard',component:DashboardComponent},
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
