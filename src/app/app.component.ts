import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ShortbreadDetailsComponent } from './shortbread-details/shortbread-details.component';
import { ShortbreadDetails } from './shortbread-details';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    ShortbreadDetailsComponent,
    CommonModule,
    RouterModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  shortbreadList: ShortbreadDetails[] = [
    {
      id: 1,
      name: 'shortbread finger',
      brand: 'Morrisons',
      price: 1.0,
      rating: 4,
      comment: 'buttery',
    },
    {
      id: 2,
      name: 'shortbread finger',
      brand: 'ALDI',
      price: 1.5,
      rating: 4.5,
      comment: 'love it',
    },
    {
      id: 3,
      name: 'shortbread finger',
      brand: 'Lidl',
      price: 1.2,
      rating: 3,
      comment: 'floury',
    },
  ];
}
