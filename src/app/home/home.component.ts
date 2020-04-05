import { Component, OnInit } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import { switchMap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import * as algoliasearch from 'algoliasearch';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass'],
})
export class HomeComponent implements OnInit {
  items$: Observable<any>;
  searchSubject = new BehaviorSubject<string>('');
  algoliaConfig: any;

  constructor(firestore: AngularFirestore) {
    this.algoliaConfig = {
      indexName: environment.algolia.indexName,
      searchClient: algoliasearch(
        environment.algolia.appId,
        environment.algolia.apiKey
      ),
    };

    this.items$ = this.searchSubject
      .asObservable()
      .pipe(
        switchMap((txt) =>
          firestore
            .collection('items', (ref) => ref.where('title', '==', txt))
            .valueChanges()
        )
      );
  }

  ngOnInit(): void {}

  searchChange(e) {
    this.searchSubject.next(`${e.target.value}`);
  }
}
