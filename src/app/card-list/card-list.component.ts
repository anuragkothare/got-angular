import { CardService } from './../card.service';


import { BookComponent } from './../book/book.component';
import { Component, OnInit, Input } from '@angular/core';

// importing classes
import { Book } from '../book/book'
import { House } from '../house/house'
import { Character } from '../character/character';

@Component({
  selector: 'card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css']
})
export class CardListComponent implements OnInit {

  public gotItems: any[]
  public allBooks: Book[]
  public allHouses: House[]
  public allCharacters: Character[]
  public currentBook: Book


  constructor(public CardService: CardService) {

   }

  ngOnInit() {

    console.log('card-list component called')
    this.gotItems = [];

    this.CardService.getAllCharacters().subscribe(
      (data: Character[]) => {
        var num = 1
        data.forEach((character) => {
          character.id = num++
          character.type = "character"
         this.gotItems.push(character)
        }
        )
      },
     error => {
      console.log("some error occured")
        console.log(error.errorMessage)
      }
    )

   this.allBooks =  this.CardService.getAllBooks().subscribe(
      (data:Book[]) => {
        var num = 1
        data.forEach((book)=>{
          book.id = num++
          book.type = "book"
          this.gotItems.push(book);
        })
      },
      error => {
        console.log("some error occured")
        console.log(error.errorMessage)
      }
    )



     this.allHouses= this.CardService.getAllHouses().subscribe(
       (data:House[]) => {
         var num = 1
         data.forEach((house) => {
           house.id = num++
           house.type = "house"
          this.gotItems.push(house)
         }
         )
       },
       error => {
         console.log("some error occured")
         console.log(error.errorMessage)
       }
     )

     console.log(this.gotItems)

    //  sorting
    this.gotItems.sort(function(a, b){
      if(a.name < b.name) return -1;
      if(a.name > b.name) return 1;
      return 0;
  })
    console.log(this.gotItems)
  }
}
