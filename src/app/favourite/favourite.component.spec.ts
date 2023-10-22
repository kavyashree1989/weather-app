import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherFavouriteComponent } from './favourite.component';

describe('WeatherFavouriteComponent', () => {
  let component: WeatherFavouriteComponent;
  let fixture: ComponentFixture<WeatherFavouriteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WeatherFavouriteComponent],
    });
    fixture = TestBed.createComponent(WeatherFavouriteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
