import { Component, OnInit } from '@angular/core';
import { Observable, Subject, BehaviorSubject } from 'rxjs';
import { Item } from '../models/item';
import { AngularFirestore } from '@angular/fire/firestore';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass'],
})
export class HomeComponent implements OnInit {
  items$: Observable<any>;
  searchSubject = new BehaviorSubject<string>('');

  constructor(firestore: AngularFirestore) {
    this.items$ = this.searchSubject
      .asObservable()
      .pipe(
        switchMap((txt) =>
          firestore
            .collection('items', (ref) =>
              ref.where('title', '==', txt)
            )
            .valueChanges()
        )
      );
  }

  ngOnInit(): void {}

  searchChange(e) {
    this.searchSubject.next(`${e.target.value}`);
  }
}
