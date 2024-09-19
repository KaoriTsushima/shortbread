import { Component, Input } from '@angular/core';
import { ShortbreadDetails } from '../shortbread-details';

@Component({
  selector: 'app-shortbread-details',
  standalone: true,
  imports: [],
  template: `
    <h2>{{ shortbreadDetails.name }}</h2>
    <h3>{{ shortbreadDetails.brand }}</h3>
    <h4>£{{ shortbreadDetails.price }}</h4>
    <p>{{ shortbreadDetails.comment }}</p>
  `,
  styleUrl: './shortbread-details.component.css',
})
export class ShortbreadDetailsComponent {
  @Input() shortbreadDetails!: ShortbreadDetails;
  ShortbreadDetails = {
    id: 1,
    name: 'shortbread fingar',
    brand: 'Morrisons',
    price: 1.0,
    comment: 'buttery',
  };
}
