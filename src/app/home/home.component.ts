import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShortbreadDetails } from '../shortbread-details';
import { ShortbreadDetailsComponent } from '../shortbread-details/shortbread-details.component';
import { NutrientService } from '../nutrient.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ShortbreadDetailsComponent],
  template: `
    <section class="shortbread-lists">
      <app-shortbread-details
        *ngFor="let shortbreadDetails of shortbreadList"
        [shortbreadDetails]="shortbreadDetails"
      />
    </section>
  `,
  styleUrl: './home.component.css',
})
export class HomeComponent {
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
