import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherRecentSearchComponent } from './recent-search.component';

describe('WeatherRecentSearchComponent', () => {
  let component: WeatherRecentSearchComponent;
  let fixture: ComponentFixture<WeatherRecentSearchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WeatherRecentSearchComponent],
    });
    fixture = TestBed.createComponent(WeatherRecentSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
