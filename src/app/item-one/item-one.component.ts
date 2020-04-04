import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-item-one',
  templateUrl: './item-one.component.html',
  styleUrls: ['./item-one.component.sass'],
})
export class ItemOneComponent implements OnInit {
  item$: Observable<any>;

  constructor(private route: ActivatedRoute, firestore: AngularFirestore) {
    this.item$ = firestore
      .collection('items', (ref) =>
        ref.where('id', '==', Number(this.route.snapshot.params.id))
      )
      .valueChanges()
      .pipe(
        map((x) => (Array.isArray(x) ? x[0] : null))
      );
  }

  ngOnInit(): void {}
}
