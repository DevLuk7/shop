import { Component, Inject, forwardRef, OnInit } from '@angular/core';
import { BaseWidget, NgAisInstantSearch } from 'angular-instantsearch';
import { connectSearchBox } from 'instantsearch.js/es/connectors';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.sass']
})
export class SearchBoxComponent extends BaseWidget implements OnInit {
  public state: {
    query: string;
    refine: any;
    clear: any;
    isSearchStalled: boolean;
    widgetParams: object;
  };

  constructor(
    @Inject(forwardRef(() => NgAisInstantSearch))
    public instantSearchParent
  ) {
    super('SearchBox');
  }

  ngOnInit() {
    this.createWidget(connectSearchBox, {
      // instance options
    });
    super.ngOnInit();
  }
}