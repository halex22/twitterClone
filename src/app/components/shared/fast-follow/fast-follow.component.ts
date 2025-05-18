import { Component, Input } from '@angular/core';
import { FastFollow } from '../../../models/follow';

@Component({
  selector: 'app-fast-follow',
  standalone: true,
  imports: [],
  templateUrl: './fast-follow.component.html',
  styleUrl: './fast-follow.component.scss'
})
export class FastFollowComponent {
  @Input({required:true}) name!: string  
  @Input({required: true}) at!: string
  @Input() status?: string
}
