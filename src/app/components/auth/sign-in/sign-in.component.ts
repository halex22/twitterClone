import { Component, inject } from '@angular/core';
import { LayoutComponent } from '../layout/layout.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [LayoutComponent],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.scss'
})
export class SignInComponent {
  router = inject(Router)
  onClose() {
    this.router.navigate(['/'])
  }
}
