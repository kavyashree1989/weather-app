import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WeatherHomeComponent } from './home/home.component';
import { WeatherFavouriteComponent } from './favourite/favourite.component';
import { WeatherRecentSearchComponent } from './recent-search/recent-search.component';
const routes: Routes = [
  {
    path: 'home',
    component: WeatherHomeComponent,
    title: 'Weather Home',
  },

  {
    path: 'favourite',
    component: WeatherFavouriteComponent,
    title: 'Weather Favourite',
  },
  {
    path: 'recentsearch',
    component: WeatherRecentSearchComponent,
    title: 'Weather Recent Search',
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
