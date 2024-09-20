import { Component, Input } from '@angular/core';
import { ShortbreadDetails } from '../shortbread-details';

@Component({
  selector: 'app-shortbread-details',
  standalone: true,
  imports: [],
  template: `
    <section class="shortbread-list">
      <h2>{{ shortbreadDetails.name }}</h2>
      <h3>{{ shortbreadDetails.brand }}</h3>
      <h4>£{{ shortbreadDetails.price }}</h4>
      <p>{{ shortbreadDetails.comment }}</p>
    </section>
  `,
  styleUrl: './shortbread-details.component.css',
})
export class ShortbreadDetailsComponent {
  @Input() shortbreadDetails!: ShortbreadDetails;
}
