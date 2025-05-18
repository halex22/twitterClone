import { Component , Input} from '@angular/core';
import { Follow } from '../../../models/follow';

@Component({
  selector: 'app-follow-card',
  standalone: true,
  imports: [],
  templateUrl: './follow-card.component.html',
  styleUrl: './follow-card.component.scss'
})
export class FollowCardComponent {
  @Input({required:true}) followSuggestion!: Follow
}
