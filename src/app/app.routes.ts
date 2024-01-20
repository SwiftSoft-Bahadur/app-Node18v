import { Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { UsersComponent } from './users/users.component';
import { PostsComponent } from './posts/posts.component';
import { AuthComponent } from './auth/auth.component';

export const routes: Routes = [
     // Wildcard route for 404 page
  { path: 'users', component: UsersComponent },
  { path: 'posts', component: PostsComponent },
  { path: 'auth', component: AuthComponent },
];
