import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { WeatherAppComponent } from './app.component';
import { WeatherBannerComponent } from './banner/banner.component';
import { WeatherHomeComponent } from './home/home.component';
import { WeatherFavouriteComponent } from './favourite/favourite.component';
import { WeatherRecentSearchComponent } from './recent-search/recent-search.component';
import { WeatherListComponent } from './weather-list/weather-list.component';
import { WeatherConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';

import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
@NgModule({
  declarations: [
    WeatherAppComponent,
    WeatherBannerComponent,
    WeatherHomeComponent,
    WeatherFavouriteComponent,
    WeatherRecentSearchComponent,
    WeatherListComponent,
    WeatherConfirmDialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatTabsModule,
    MatIconModule,
    MatDialogModule,
    MatSidenavModule,
    MatListModule,
  ],
  providers: [],
  bootstrap: [WeatherAppComponent],
})
export class AppModule {}
