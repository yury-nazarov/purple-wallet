import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FormsModule} from '@angular/forms';


export enum EPasswordInputIcons {
  Opened = 'icons/eye_opened.svg',
  Closed = 'icons/eye_closed.svg',
}

@Component({
  selector: 'app-password-input',
  templateUrl: './password-input.component.html',
  styleUrls: ['./password-input.component.scss'],
  standalone: true,
  imports: [FormsModule],
})
export class PasswordInputComponent {
  @Input() type: 'text' | 'password' = 'password';
  @Input() placeholder: string = '';
  @Input() disabled: boolean = false;
  @Input() iconUrl: string | null = null;
  @Input() value: string | null = null;
  @Output() controlValue: EventEmitter<string | null> = new EventEmitter<string | null>();
  buttonIcon: string = EPasswordInputIcons.Closed;

  onInput(value: string | null): void {
    this.controlValue.emit(value);
  }

  // Скрыть показать пароль в форме ввода пароля
  onButtonToggleClick() {
    if (this.type === 'password') {
      this.type = 'text';
      this.buttonIcon = EPasswordInputIcons.Opened;
    } else {
      this.type = 'password';
      this.buttonIcon = EPasswordInputIcons.Closed;
    }
  }
}
