import { Component, effect, OnInit, signal } from '@angular/core';
import { IRateModel } from './models/rate.model';
import { FAKE_RATES } from '../../../shared/const/fake-rates.const';
import { RateComponent } from './components/rate/rate.component';

@Component({
  selector: 'app-rates',
  templateUrl: './rates.component.html',
  styleUrls: ['./rates.component.scss'],
  standalone: true,
  imports: [RateComponent],
})
export class RatesComponent implements OnInit {
  rates = signal<IRateModel[]>([]);

  constructor() {
    // Подписка на изменения
    effect(() => {
      console.log('Rates update:', this.rates());
    });
  }

  ngOnInit() {
    setTimeout(() => {
      this.rates.set(FAKE_RATES);
    }, 1000);
  }
}
