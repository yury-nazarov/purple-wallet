import {inject, Component, OnInit} from '@angular/core';
import {ButtonComponent} from '../../shared/components/button/button.component';
import {PasswordInputComponent} from '../../shared/components/password-input/password-input.component';
import {InputComponent} from '../../shared/components/input/input.component';
import {NgOptimizedImage} from '@angular/common';
import {ActivatedRoute, RouterLink} from '@angular/router';

@Component({
  selector: 'app-layout',
  imports: [ButtonComponent, InputComponent, PasswordInputComponent, NgOptimizedImage, RouterLink],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
  standalone: true,
})
export class PublicLayoutComponent implements OnInit {

  // @ts-ignore
  public activatedRoute: ActivatedRoute = inject(ActivatedRoute);

  onInputChange($event: string | null) {}

  ngOnInit(): void {
    // http://localhost:4200/public/data
    // Читаем из свойства params: from: data
    console.log(this.activatedRoute.snapshot);
  }
}
