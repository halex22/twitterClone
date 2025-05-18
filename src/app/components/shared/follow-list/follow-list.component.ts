import { Component } from '@angular/core';
import { FollowCardComponent } from '../follow-card/follow-card.component';
import { Follow } from '../../../models/follow';

@Component({
  selector: 'app-follow-list',
  standalone: true,
  imports: [FollowCardComponent],
  templateUrl: './follow-list.component.html',
  styleUrl: './follow-list.component.scss'
})
export class FollowListComponent {

  dummyData: Follow[] = [
    {
      img: 'https://pbs.twimg.com/profile_images/1697749409851985920/HbrI04tM_bigger.jpg',
      name: 'SpaceX',
      status: 'yellow',
      description: 'SpaceX designs, manufactures and launches the world’s most advanced rockets and spacecraft',
      at: 'SpaceX'
    },
    {
      img: 'https://pbs.twimg.com/profile_images/1337607516008501250/6Ggc4S5n_normal.png',
      name: 'Tesla',
      at: 'Tesla',
      status: 'yellow',
      description: 'Electric vehicles, giant batteries & solar, AI & robotics'
    }
  ]
}
