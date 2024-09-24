import { Component, Input } from '@angular/core';
import { ShortbreadDetails } from '../shortbread-details';
import { NzRateModule } from 'ng-zorro-antd/rate';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-shortbread-details',
  standalone: true,
  imports: [FormsModule, NzRateModule, RouterLink, RouterOutlet],
  template: `
    <section class="shortbread-list">
      <h2>{{ shortbreadDetails.name }}</h2>
      <h3>Brand: {{ shortbreadDetails.brand }}</h3>
      <h4>£{{ shortbreadDetails.price }}</h4>
      <p>Comment: {{ shortbreadDetails.comment }}</p>

      <nz-rate
        [nzCount]="5"
        [ngModel]="shortbreadDetails.rating"
        nzAllowHalf
      ></nz-rate>
      <br />
      <a [routerLink]="['/details', shortbreadDetails.id]">See nutrient data</a>
    </section>
  `,

  styleUrl: './shortbread-details.component.css',
})
export class ShortbreadDetailsComponent {
  @Input() shortbreadDetails!: ShortbreadDetails;
}
