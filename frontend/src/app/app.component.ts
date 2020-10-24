import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[id="app"]',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Avalon';
  featuredResponse = null;

  ngOnInit(): void {
    // @ts-ignore
    window.backend.AddonHelper.GetFeatured().then(result => {
      this.featuredResponse = result
    });
  }

  openTab(id: string): void {
    const x = document.getElementsByClassName("mainTabs");
    for (let i = 0; i < x.length; i++) {
      const item = x.item(i) as HTMLElement;
      item.style.display = 'none';
    }
    document.getElementById(id).style.display = "block";
  }

  openGetAddonsTab(id: string): void {
    const x = document.getElementsByClassName("overviewTabs");
    for (let i = 0; i < x.length; i++) {
      const item = x.item(i) as HTMLElement;
      item.style.display = 'none';
    }
    document.getElementById(id).style.display = "block";
  }
}
