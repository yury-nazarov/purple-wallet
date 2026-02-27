import {Component, Input, ViewEncapsulation} from '@angular/core';
import { FormsModule } from '@angular/forms';

// Декоратор добавляет мета данные класса
// Это функция, которая принимает в себя объект, с обязательными параметрами
@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  @Input() title = '';
}



