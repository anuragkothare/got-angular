import { Component, OnInit } from '@angular/core';
import { CardService } from './../card.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

// importing classes
import { House } from '../house/house';


@Component({
  selector: 'app-housedetail',
  templateUrl: './housedetail.component.html',
  styleUrls: ['./housedetail.component.css']
})
export class HousedetailComponent implements OnInit {

  public currentHouse$: Observable<House>

  constructor(private route: ActivatedRoute, private router: Router, private CardService: CardService) { }

  ngOnInit() {
    this.currentHouse$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.CardService.getCurrentHouse(params.get('id')))
    );
  }

  goToCards() {
    this.router.navigate(['/cards']);
  }

}
