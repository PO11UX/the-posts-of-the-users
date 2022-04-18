import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';import { PostsComponent } from './posts/posts.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UsersComponent } from './users/users.component';


const routes: Routes = [
    { path: '',
    redirectTo: '/users',
    pathMatch: 'full'
    },
    { path: 'users', component:UsersComponent },
    { path: 'user-details', component:UserDetailsComponent },
    { path: 'posts', component:PostsComponent },

  ];
  
  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
  