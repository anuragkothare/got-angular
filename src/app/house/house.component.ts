import { Component, OnInit, Input } from '@angular/core';

import { House } from './house'
@Component({
  selector: 'house',
  templateUrl: './house.component.html',
  styleUrls: ['./house.component.css']
})
export class HouseComponent implements OnInit {

  @Input('house') data: House

  constructor() { }

  ngOnInit() {
  }

}
