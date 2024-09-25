import { Routes } from '@angular/router';
import { DetailsComponent } from './details/details.component';
import { HomeComponent } from './home/home.component';

const routeConfig: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Shortbread Home',
  },
  {
    path: 'details/:id',
    component: DetailsComponent,
    title: 'Nutrient details',
  },
];

export default routeConfig;
