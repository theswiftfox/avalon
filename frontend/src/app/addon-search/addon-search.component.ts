import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addon-search',
  templateUrl: './addon-search.component.html',
  styleUrls: ['./addon-search.component.css']
})
export class AddonSearchComponent implements OnInit {

  searchResult = null;

  constructor() { }

  ngOnInit() {
  }

  search(searchTerm: string): void {
    // @ts-ignore
    window.backend.AddonHelper.Search(searchTerm).then(result => {
      this.searchResult = result;
    });
  }

  onKey(value: string) {
    if (value != null && value.length > 0) {
      this.search(value);
    }
  }

}
