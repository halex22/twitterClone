import { Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { FeedComponent } from './feed/feed.component';

export const homeRoutes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    children: [
      {
        path: '',
        component: FeedComponent
      }
    ]
  },
];
