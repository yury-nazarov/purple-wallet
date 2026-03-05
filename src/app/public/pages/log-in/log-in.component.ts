import {Component} from '@angular/core';
import {RouterLink} from '@angular/router';
import {InputComponent} from '../../../shared/components/input/input.component';
import {ButtonComponent} from '../../../shared/components/button/button.component';
import {PasswordInputComponent} from '../../../shared/components/password-input/password-input.component';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss'],
  standalone: true,   // сам содержит все зависимости
  imports: [
    InputComponent,
    RouterLink,
    ButtonComponent,
    PasswordInputComponent
  ],
})
export class LogInComponent {

  onInputChange($event: string | null) {
    console.log('InputChange', $event);
  }
}
