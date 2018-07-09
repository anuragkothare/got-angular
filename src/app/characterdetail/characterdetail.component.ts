import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { CardService } from './../card.service';

import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { Character } from '../character/character';

@Component({
  selector: 'app-characterdetail',
  templateUrl: './characterdetail.component.html',
  styleUrls: ['./characterdetail.component.css']
})
export class CharacterdetailComponent implements OnInit {

  public currentCharacter$: Observable<Character>

  constructor(private route: ActivatedRoute, private router: Router, private CardService: CardService) { }

  ngOnInit() {

    this.currentCharacter$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.CardService.getCurrentCharacter(params.get('id')))
    );
  }

  goToCards() {
    this.router.navigate(['/cards']);
  }

}
