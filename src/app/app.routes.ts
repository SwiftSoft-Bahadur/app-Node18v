import { Routes } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { PostsComponent } from './posts/posts.component';
import { AuthComponent } from './auth/auth.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
     // Wildcard route for 404 page
  { path: '/', component: AppComponent },
  { path: 'users', component: UsersComponent },
  { path: 'posts', component: PostsComponent },
  { path: 'auth', component: AuthComponent },
];
