import { Component, OnInit } from '@angular/core';
import { IRateModel } from './models/rate.model';
import { FAKE_RATES } from '../../../shared/const/fake-rates.const';
import { RateComponent } from './components/rate/rate.component';
import { delay, Observable, of } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-rates',
  templateUrl: './rates.component.html',
  styleUrls: ['./rates.component.scss'],
  standalone: true,
  imports: [RateComponent, AsyncPipe],
})
export class RatesComponent implements OnInit {
  //rates: IRateModel[] = FAKE_RATES;
  rates$: Observable<IRateModel[]> = of(FAKE_RATES).pipe(delay(1000));

  ngOnInit() {
    // В этом случае нужно не забыть выполнить самостоятельные отписки через OnDestroy lifecycle hook
    // Иначе будут утечки памяти
    this.rates$.subscribe(console.log);
  }
}
