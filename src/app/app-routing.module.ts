import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ItemOneComponent } from './item-one/item-one.component';
import { WildcardComponent } from './wildcard/wildcard.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'item/:id',
    component: ItemOneComponent
  },
  {
    path: '**',
    component: WildcardComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
