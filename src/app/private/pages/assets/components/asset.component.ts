import { Component, Input } from '@angular/core';
import { IAssetModel } from '../models/asset.model';
import { CurrencyPipe, DecimalPipe, NgClass, NgOptimizedImage, PercentPipe, UpperCasePipe } from '@angular/common';


@Component({
  selector: 'app-asset',
  templateUrl: './asset.component.html',
  styleUrls: ['./asset.component.scss'],
  standalone: true,
  imports: [NgOptimizedImage, NgClass, UpperCasePipe, CurrencyPipe, PercentPipe, DecimalPipe],
})
export class AssetComponent {
  // Принимаем в компонент данные для элементов отдельнойвалюты
  @Input() data: IAssetModel | null = null;
}
