import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  standalone: true,
  imports: [FormsModule],
})
export class InputComponent {
  @Input() type: 'text' | 'email' = 'text';
  @Input() placeholder: string = '';
  @Input() disabled: boolean = false;
  @Input() iconUrl: string | null = null;
  @Input() value: string | null = null;
  @Output() controlValue: EventEmitter<string | null> = new EventEmitter<string | null>();

  onInput(value: string | null): void {
    this.controlValue.emit(value);
  }
}
