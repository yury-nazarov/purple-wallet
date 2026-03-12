import {Component} from '@angular/core';
import {RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import {NgOptimizedImage} from '@angular/common';
import {NavButtonComponent} from '../../shared/components/nav-button/nav-button.component';
import {INavConst, NAV_CONST} from '../../shared/const/menu-items.const';

@Component({
  selector: 'app-private-layout',
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
  standalone: true,
  imports: [RouterOutlet, NgOptimizedImage, NavButtonComponent, RouterLink, RouterLinkActive],
})
export class PrivateLayoutComponent {
  navLinks: INavConst[] = NAV_CONST;

  protected readonly NAV_CONST = NAV_CONST;

  onLogoutClick() {
    console.log('Logout');
  }
}
