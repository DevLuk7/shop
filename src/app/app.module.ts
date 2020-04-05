import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AngularFireModule } from '@angular/fire';
import { AngularFireAnalyticsModule } from '@angular/fire/analytics';
import { AngularFirestoreModule } from '@angular/fire/firestore';

import { NgAisModule } from 'angular-instantsearch';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItemOneComponent } from './item-one/item-one.component';
import { HomeComponent } from './home/home.component';
import { WildcardComponent } from './wildcard/wildcard.component';
import { environment } from 'src/environments/environment';
import { SearchBoxComponent } from './search-box/search-box.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemOneComponent,
    HomeComponent,
    WildcardComponent,
    SearchBoxComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAnalyticsModule,
    AngularFirestoreModule,
    NgAisModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
