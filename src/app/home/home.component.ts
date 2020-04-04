import { Component, OnInit } from '@angular/core';
import { ItemsService } from '../items.service';
import { Observable } from 'rxjs';
import { Item } from '../models/item';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass'],
})
export class HomeComponent implements OnInit {
  items$: Observable<Item[]>;

  constructor(
    private itemsService: ItemsService
  ) {}

  ngOnInit(): void {
    this.items$ = this.itemsService.items$;
  }
}
