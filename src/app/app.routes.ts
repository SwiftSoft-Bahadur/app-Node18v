import { Routes } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { PostsComponent } from './posts/posts.component';

export const routes: Routes = [
  { path: '', redirectTo: '/app', pathMatch: 'full' },
  { path: 'users', component: UsersComponent },
  { path: 'posts', component: PostsComponent },
];
