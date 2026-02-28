import { Component, signal } from '@angular/core';
import {ButtonComponent} from './shared/components/button/button.component';
import {InputComponent} from './shared/components/input/input.component';
import {PasswordInputComponent} from './shared/components/password-input/password-input.component';

@Component({
  selector: 'app-root',
  imports: [ButtonComponent, InputComponent, PasswordInputComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('purple-wallet');

  onBtnClick(): void {
    console.log('btn Click');
  }

  onInputChange($event: string | null) {
    console.log('inputChange', $event);
  }
}

