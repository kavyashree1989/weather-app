import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherBannerComponent } from './banner.component';

describe('WeatherBannerComponent', () => {
  let component: WeatherBannerComponent;
  let fixture: ComponentFixture<WeatherBannerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WeatherBannerComponent],
    });
    fixture = TestBed.createComponent(WeatherBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
