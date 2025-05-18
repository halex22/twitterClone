import { Component, Input } from '@angular/core';
import { FastFollow } from '../../../models/follow';
import { FastFollowComponent } from '../fast-follow/fast-follow.component';

@Component({
  selector: 'app-fast-follow-list',
  standalone: true,
  imports: [FastFollowComponent],
  templateUrl: './fast-follow-list.component.html',
  styleUrl: './fast-follow-list.component.scss'
})
export class FastFollowListComponent {
  @Input({required: true}) data!: FastFollow[]
}
