import { Component, OnInit } from "@angular/core";
import { CardService } from "./../card.service";
import { Router, ActivatedRoute, ParamMap } from "@angular/router";

import { Observable } from "rxjs";
import { switchMap } from "rxjs/operators";

// importing classes
import { Book } from "../book/book";

@Component({
  selector: "app-bookdetail",
  templateUrl: "./bookdetail.component.html",
  styleUrls: ["./bookdetail.component.css"]
})
export class BookdetailComponent implements OnInit {
  public currentBook$: Observable<Book>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private CardService: CardService
  ) {}

  ngOnInit() {
    this.currentBook$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.CardService.getCurrentBook(params.get("id"))
      )
    );
  }

  goToCards() {
    this.router.navigate(["/cards"]);
  }
}
