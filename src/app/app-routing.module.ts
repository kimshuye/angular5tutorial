import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { MoviesComponent } from './movies/movies.component';
import { MessagesComponent } from './messages/messages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { Movie } from './models/movie';
import { EmployeeFormComponent } from './employee-form/employee-form.component';
import { UserDetailComponent } from './user-detail/user-detail.component';


const routes: Routes = [
  { path: '',redirectTo:'/',pathMatch: 'full'},
  { path: '',component:DashboardComponent},
  { path: 'movies',component:MoviesComponent},
  { path: 'messages',component:MessagesComponent},
  { path: 'detail/:id',component:MovieDetailComponent},
  { path: 'employeeform',component:EmployeeFormComponent},
  { path: 'userform',component:UserDetailComponent},
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
