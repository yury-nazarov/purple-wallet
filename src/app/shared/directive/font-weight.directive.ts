import { Directive, ElementRef, Input, OnChanges, Renderer2, SimpleChanges } from '@angular/core';


// Атрибутная директива отвечает за управление свойствами и атрибутами DOM дерева, не затрагивая стаму структуру DOM
@Directive({
  selector: '[appFontWeight]',
  standalone: true,
})
export class FontWeightDirective implements OnChanges {
  @Input() fontWeight = 'normal';

  constructor(
    // eslint-disable-next-line @angular-eslint/prefer-inject
    private _el: ElementRef,      // Работа с элементами DOM через удобную абстракцию
    // eslint-disable-next-line @angular-eslint/prefer-inject
    private _renderer: Renderer2, // Отвечает за изменения внешнего вида отображается на экране
  ){}

  ngOnChanges(changes: SimpleChanges) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    if (changes != null & changes['fontWeight'] != null) {
      this._renderer.setStyle(this._el.nativeElement, 'font-weight', changes['fontWeight'].currentValue);
    }
  }


}
