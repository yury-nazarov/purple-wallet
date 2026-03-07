import {Component, EventEmitter, Input, Output} from '@angular/core';
import {NgClass, NgOptimizedImage} from '@angular/common';
import {Event} from '@angular/router';

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
  public type: string = 'button';
  public isActive: boolean = false;

  @Input() text: string = '';
  @Input() iconUrl: string = '';
  @Input() iconUrlActive: string = '';
  @Input() disabled: boolean = false;

  @Output() clicked: EventEmitter<PointerEvent> = new EventEmitter<PointerEvent>();

  onClick(event: PointerEvent): void {
    if (!this.disabled) {
      this.clicked.emit(event);
    }
  }
}
