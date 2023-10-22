import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherConfirmDialogComponent } from './confirm-dialog.component';

describe('WeatherConfirmDialogComponent', () => {
  let component: WeatherConfirmDialogComponent;
  let fixture: ComponentFixture<WeatherConfirmDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WeatherConfirmDialogComponent],
    });
    fixture = TestBed.createComponent(WeatherConfirmDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
