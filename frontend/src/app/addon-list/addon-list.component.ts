import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-addon-list',
  templateUrl: './addon-list.component.html',
  styleUrls: ['./addon-list.component.css'],
  inputs: ['addonList']
})
export class AddonListComponent implements OnInit {

  addons = null;

  @Input() addonList;

  constructor() { }

  ngOnInit() {
    this.addons = this.addonList
  }

}
