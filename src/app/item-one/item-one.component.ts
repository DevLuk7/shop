import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ItemsService } from '../items.service';
import { map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Item } from '../models/item';

@Component({
  selector: 'app-item-one',
  templateUrl: './item-one.component.html',
  styleUrls: ['./item-one.component.sass']
})
export class ItemOneComponent implements OnInit {
  item$: Observable<Item>;

  constructor(
    private route: ActivatedRoute,
    private itemsServ: ItemsService
  ) { }

  ngOnInit(): void {
    this.item$ = this.itemsServ.items$.pipe(
      map((arr) => {
        return arr.find((x) => x.id === Number(this.route.snapshot.params.id));
      })
    );
  }

}
