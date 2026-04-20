import { Component, Input } from '@angular/core';
import { IRateModel } from '../../models/rate.model';
import { NgClass, NgOptimizedImage, PercentPipe } from '@angular/common';

@Component({
  selector: 'app-rate',
  templateUrl: './rate.component.html',
  styleUrls: ['./rate.component.scss'],
  standalone: true,
  imports: [NgClass, PercentPipe, NgOptimizedImage],
})
export class RateComponent {
  @Input() data: IRateModel | null = null;
}
