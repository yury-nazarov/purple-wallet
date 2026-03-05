import { Routes } from '@angular/router';
import {PublicLayoutComponent} from './public/_layout/layout.componrnt';
import {PrivateLayoutComponent} from './private/_layout/layout.componrnt';
import {LogInComponent} from './public/pages/log-in/log-in.component';
import {DashboardComponent} from './private/pages/dashboard/dashboard.component';

export const routes: Routes = [
  {
    path: 'public',
    component: PublicLayoutComponent,
    children: [
      {
        path: 'log-in',
        component: LogInComponent,
      },
      {
        path: '**',
        redirectTo: 'log-in',
      }
    ]
  },
  {
    path: 'private',
    component: PrivateLayoutComponent,
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent,
      },
      {
        path: '**',
        redirectTo: 'dashboard',
      }
    ]
  },
  // Если подходящего шаблона не найдено, редирект на страницу авторизации
  {
    path: '**',
    redirectTo: 'public',
  }
];
