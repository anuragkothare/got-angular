
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { routingModule } from './app.routing'

import { AppComponent } from './app.component';
import { BookComponent } from './book/book.component';
import { CardListComponent } from './card-list/card-list.component';
import { HouseComponent } from './house/house.component';
import { CharacterComponent } from './character/character.component';
import { CardInfoComponent } from './card-info/card-info.component';
import { HttpClientModule } from '@angular/common/http';
import { BookdetailComponent } from './bookdetail/bookdetail.component';
import { HousedetailComponent } from './housedetail/housedetail.component';
import { CharacterdetailComponent } from './characterdetail/characterdetail.component';
import { NotfoundComponent } from './notfound/notfound.component';



@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    CardListComponent,
    HouseComponent,
    CharacterComponent,
    CardInfoComponent,
    BookdetailComponent,
    HousedetailComponent,
    CharacterdetailComponent,
    NotfoundComponent,
  ],
  imports: [
    BrowserModule,
    routingModule,
    HttpClientModule
  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
