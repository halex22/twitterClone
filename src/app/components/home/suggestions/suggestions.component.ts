import { Component } from '@angular/core';
import { FastFollowListComponent } from '../../shared/fast-follow-list/fast-follow-list.component';
import { FastFollow } from '../../../models/follow';

@Component({
  selector: 'section[suggestions]',
  standalone: true,
  imports: [FastFollowListComponent],
  templateUrl: './suggestions.component.html',
  styleUrl: './suggestions.component.scss'
})
export class SuggestionsComponent {

  suggestionDummyData: FastFollow[] = [
    {
      name: 'Youtube',
      img: 'https://pbs.twimg.com/profile_images/1915882040353837056/VbhPvueq_normal.jpg',
      at: 'Youtube'
    },
    {
      name:'twenty one pilots',
      img: 'https://pbs.twimg.com/profile_images/1924102838386319360/4_jXbgoR_normal.jpg',
      at: 'twentyonepilots'
    }
  ]
}
