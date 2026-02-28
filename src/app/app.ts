import { Component, signal } from '@angular/core';
import {PublicLayoutComponent} from './public/_layout/layout.componrnt';


@Component({
  selector: 'app-root',
  imports: [PublicLayoutComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {}

