import { Routes } from '@angular/router';
import {PublicLayoutComponent} from './public/_layout/layout.componrnt';
import {PrivateLayoutComponent} from './private/_layout/layout.componrnt';
import {LogInComponent} from './public/pages/log-in/log-in.component';
import {DashboardComponent} from './private/pages/dashboard/dashboard.component';
import {authGuard} from './shared/guards/auth.guard';
import {AssetsComponent} from './private/pages/assets/assets.component';
import {RatesComponent} from './private/pages/rates/rates.component';
import {ExchangeComponent} from './private/pages/exchange/exchange.component';

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
    canActivate: [authGuard],
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent,
      },
      {
        path: 'assets',
        component: AssetsComponent,
      },
      {
        path: 'rates',
        component: RatesComponent,
      },
      {
        path: 'exchange',
        component: ExchangeComponent,
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
