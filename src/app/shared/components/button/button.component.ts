import {Component, Input, ViewEncapsulation} from '@angular/core';
import { FormsModule } from '@angular/forms';

// Декоратор добавляет мета данные класса
// Это функция, которая принимает в себя объект, с обязательными параметрами
@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  // encapsulation: ViewEncapsulation.None      // Отключает инкапсуляцию стилей в ангуляр, позволяя задавать селекторы на прямую в html DOM
  // encapsulation: ViewEncapsulation.ShadowDom // Инкапсуляция стилей применяется к конкретному элементу, а не всей странице через head
  encapsulation: ViewEncapsulation.Emulated,    // Используется по умолчанию
  imports: [FormsModule],                       // Содержит весь набор функций и компонентов необходимых для работы форм
})
export class ButtonComponent {
  @Input() title = '';
  value: string = "";

  onClickEvent(event: Event) {
    console.log("Event", event);
    this.value = "Новое значение";
  }
}



