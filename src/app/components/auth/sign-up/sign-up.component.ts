import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { LayoutComponent } from '../layout/layout.component';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [LayoutComponent],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss'
})
export class SignUpComponent {

  router = inject(Router)

  onClose(): void {
    this.router.navigate(['/'])
  }
}
