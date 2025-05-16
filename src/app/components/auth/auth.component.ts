import { Component, inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [RouterOutlet, RouterLink, LayoutComponent],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss'
})
export class AuthComponent {
  router = inject(Router)

  get isBaseAuthRoute(): boolean {
    return this.router.url === '/'
  }
}
