import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddonSearchComponent } from './addon-search.component';

describe('AddonSearchComponent', () => {
  let component: AddonSearchComponent;
  let fixture: ComponentFixture<AddonSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddonSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddonSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
