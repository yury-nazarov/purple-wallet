import {Component, EventEmitter, Input, Output} from '@angular/core';
import {NgClass, NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-nav-button',
  templateUrl: './nav-button.component.html',
  styleUrls: ['./nav-button.component.scss'],
  standalone: true,
  imports: [
    NgOptimizedImage,
    NgClass
  ]
})
export class NavButtonComponent {
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
}
