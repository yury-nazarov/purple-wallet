import { Routes } from '@angular/router';
import {PublicLayoutComponent} from './public/_layout/layout.componrnt';
import {PrivateLayoutComponent} from './private/_layout/layout.componrnt';

export const routes: Routes = [
  {
    path: 'public',
    component: PublicLayoutComponent,
  },
  {
    path: 'private',
    component: PrivateLayoutComponent,
  },
  // Если подходящего шаблона не найдено, редирект на страницу авторизации
  {
    path: '**',
    redirectTo: 'public',
  }
];
