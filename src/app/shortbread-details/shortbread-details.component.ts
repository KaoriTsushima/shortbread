import { Component, Input } from '@angular/core';
import { ShortbreadDetails } from '../shortbread-details';

@Component({
  selector: 'app-shortbread-details',
  standalone: true,
  imports: [],
  template: `
    <section class="shortbread-list">
      <h2>{{ shortbreadDetails.name }}</h2>
      <h3>Brand: {{ shortbreadDetails.brand }}</h3>
      <h4>£{{ shortbreadDetails.price }}</h4>
      <h4 class="point">Point: {{ shortbreadDetails.point }}/10</h4>
      <p>Comment: {{ shortbreadDetails.comment }}</p>
    </section>
  `,
  styleUrl: './shortbread-details.component.css',
})
export class ShortbreadDetailsComponent {
  @Input() shortbreadDetails!: ShortbreadDetails;
}
