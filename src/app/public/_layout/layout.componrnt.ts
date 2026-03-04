import {inject, Component} from '@angular/core';
import {ButtonComponent} from '../../shared/components/button/button.component';
import {PasswordInputComponent} from '../../shared/components/password-input/password-input.component';
import {InputComponent} from '../../shared/components/input/input.component';
import {NgOptimizedImage} from '@angular/common';
import {Router, RouterLink} from '@angular/router';

@Component({
  selector: 'app-layout',
  imports: [ButtonComponent, InputComponent, PasswordInputComponent, NgOptimizedImage, RouterLink],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
  standalone: true,
})
export class PublicLayoutComponent {

  public router: Router = inject(Router);

  onInputChange($event: string | null) {}

  onLoginBtnClick() {
    console.log('onLoginBtnClick');
    this.router.navigate(['/private'], {
      queryParams: {
        from: 'auth',
      }
    });
  }
}
