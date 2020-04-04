import { Injectable } from '@angular/core';
import { Item } from './models/item';
import { of, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ItemsService {
  items$: Observable<Item[]>;

  constructor() {
    this.items$ = of([
      {
        id: 1,
        title: 'Item 1',
        img:
          'https://images.unsplash.com/photo-1542362567-b07e54358753?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      },
      {
        id: 2,
        title: 'Item 2',
        img:
          'https://images.unsplash.com/photo-1542362567-b07e54358753?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      },
      {
        id: 3,
        title: 'Item 3',
        img:
          'https://images.unsplash.com/photo-1542362567-b07e54358753?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      },
      {
        id: 4,
        title: 'Item 4',
        img:
          'https://images.unsplash.com/photo-1542362567-b07e54358753?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      },
      {
        id: 5,
        title: 'Item 5',
        img:
          'https://images.unsplash.com/photo-1542362567-b07e54358753?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      },
      {
        id: 6,
        title: 'Item 6',
        img:
          'https://images.unsplash.com/photo-1542362567-b07e54358753?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      },
      {
        id: 7,
        title: 'Item 7',
        img:
          'https://images.unsplash.com/photo-1542362567-b07e54358753?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      },
      {
        id: 8,
        title: 'Item 8',
        img:
          'https://images.unsplash.com/photo-1542362567-b07e54358753?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      },
      {
        id: 9,
        title: 'Item 9',
        img:
          'https://images.unsplash.com/photo-1542362567-b07e54358753?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      },
    ]);
  }
}
