import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  inject,
  Input,
  OnDestroy,
  Output,
} from '@angular/core';
import { NgClass, NgStyle, NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-nav-button',
  templateUrl: './nav-button.component.html',
  styleUrls: ['./nav-button.component.scss'],
  standalone: true,
  imports: [NgOptimizedImage, NgClass, NgStyle],
})
export class NavButtonComponent implements AfterViewInit, OnDestroy {
  // С помощью Mutation Observer API получаем доступ к элементу DOM внутри нашей текущей кнопки
  private _elementRef: ElementRef = inject(ElementRef);
  // Объявляем поле класса
  private _observer!: MutationObserver;

  public type = 'button';
  public isActive = false;

  @Input() text = '';
  @Input() iconUrl = '';
  @Input() iconUrlActive = '';
  @Input() disabled = false;

  @Output() clicked: EventEmitter<PointerEvent> = new EventEmitter<PointerEvent>();

  onClick(event: PointerEvent): void {
    if (!this.disabled) {
      this.clicked.emit(event);
    }
  }

  // AfterViewInit - хук нужен для того, что бы срабатывать как только кнопка закончила перересовку
  ngAfterViewInit(): void {
    // Объявляем обсервер
    this._observer = new MutationObserver(() => {
      this.isActive = this._elementRef.nativeElement.classList.contains('active');
    });

    // Подписываемся на обсервер и передаем в него за каким элементом нужно следить
    this._observer.observe(this._elementRef.nativeElement, {
      attributes: true, // Сообщает обсерверу что нужно следить за изменениями атрибутов
      attributeFilter: ['class'], // Отслеживаем только CSS Class
    });
  }
  // Отписываемся от всех изменений
  ngOnDestroy(): void {
    this._observer?.disconnect();
  }
}

