import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Item } from '../models/item';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass'],
})
export class HomeComponent implements OnInit {
  items$: Observable<Item[]>;

  constructor(firestore: AngularFirestore) {
    this.items$ = firestore.collection('items').valueChanges() as Observable<Item[]>;
  }

  ngOnInit(): void {}
}
