import { Component } from '@angular/core';
import { FollowListComponent } from '../../shared/follow-list/follow-list.component';

@Component({
  selector: 'app-feed',
  standalone: true,
  imports: [FollowListComponent],
  templateUrl: './feed.component.html',
  styleUrl: './feed.component.scss'
})
export class FeedComponent {

}
