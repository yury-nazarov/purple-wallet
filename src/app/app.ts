import { Component, signal } from '@angular/core';
import {PublicLayoutComponent} from './public/_layout/layout.componrnt';
import {RouterOutlet} from '@angular/router';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {}

