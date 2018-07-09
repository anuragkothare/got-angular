import { CardService } from './../card.service';
import { Component, OnInit, Input } from '@angular/core';

import {Book} from './book'


@Component({
  selector: 'book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css'],
  providers: []
})
export class BookComponent implements OnInit {

  @Input('book') data: Book

  public allCards
  public allBooks
  public currentBook

  constructor() { }



  ngOnInit() {
    console.log(this.data.id)

  }





}

