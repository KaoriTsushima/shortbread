import { Routes } from '@angular/router';
import { DetailsComponent } from './details/details.component';
import { ShortbreadDetailsComponent } from './shortbread-details/shortbread-details.component';

const routeConfig: Routes = [
  {
    path: '',
    component: ShortbreadDetailsComponent,
    title: 'Home page',
  },
  {
    path: 'details/:id',
    component: DetailsComponent,
    title: 'Nutrient details',
  },
];

export default routeConfig;
