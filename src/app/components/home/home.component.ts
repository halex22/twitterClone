import { Component } from '@angular/core';
import { OptionsComponent } from './options/options.component';
import { SuggestionsComponent } from './suggestions/suggestions.component';
import { RouterOutlet } from '@angular/router';
import { FeedComponent } from './feed/feed.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [OptionsComponent, SuggestionsComponent, RouterOutlet, FeedComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
