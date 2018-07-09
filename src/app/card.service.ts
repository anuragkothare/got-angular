import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

// Importing classes
import { Book } from './book/book';
import { House } from './house/house'
import { Character } from './character/character'




@Injectable({
  providedIn: 'root'
})
export class CardService {

  public baseUrl = "https://anapioficeandfire.com/api";

  constructor(private http: HttpClient) { }

  public getAllBooks(): any {
    return this.http.get<Book[]>(`${this.baseUrl}/books`)
  }

  public getCurrentBook(id): any {
    return this.http.get(`${this.baseUrl}/books/${id}`);
  }
  public getAllHouses(): any {
    return this.http.get<House[]>(`${this.baseUrl}/houses`)
  }

  public getCurrentHouse(id): any {
      return this.http.get(`${this.baseUrl}/houses/${id}`);
  }

  public getAllCharacters(): any {
    return this.http.get<Character[]>(`${this.baseUrl}/characters`)
  }

  public getCurrentCharacter(id): any {
    return this.http.get(`${this.baseUrl}/characters/${id}`);
  }
}

