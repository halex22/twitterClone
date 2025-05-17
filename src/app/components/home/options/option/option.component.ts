import { Component, Input } from '@angular/core';

@Component({
  selector: 'a[navLink]',
  standalone: true,
  imports: [],
  templateUrl: './option.component.html',
  styleUrl: './option.component.scss'
})
export class OptionComponent {
  @Input({required: true}) linkName!: string
}
