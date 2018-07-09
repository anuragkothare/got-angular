import { Component, OnInit, Input } from '@angular/core';
import { Character } from './character';

@Component({
  selector: 'character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit {

  @Input('character') data: Character;
  constructor() { }

  ngOnInit() {
  }

}
