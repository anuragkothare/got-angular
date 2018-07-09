import { CardListComponent } from './card-list/card-list.component';
import { Component } from '@angular/core';
import { Book } from './book/book';
import { House } from './house/house'
import { Character } from './character/character';

import { CardService } from './card.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  CardService: CardService



}
