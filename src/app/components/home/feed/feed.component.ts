import { Component } from '@angular/core';
import { FollowListComponent } from '../../shared/follow-list/follow-list.component';
import { TweetCardComponent } from '../../shared/tweet-card/tweet-card.component';

@Component({
  selector: 'app-feed',
  standalone: true,
  imports: [FollowListComponent, TweetCardComponent],
  templateUrl: './feed.component.html',
  styleUrl: './feed.component.scss'
})
export class FeedComponent {

}
