import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ShortbreadDetails } from '../shortbread-details';
import { NutrientService } from '../nutrient.service';
import { Nutrient } from '../nutrient';
import { NzTableModule } from 'ng-zorro-antd/table';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [NzTableModule],
  template: `
    <div class="nutrient-info">
      <h1>Nutrient Information</h1>
      <p>*per 100g</p>
      <nz-table class="table">
        <thead>
          <tr>
            <th>Calories</th>
            <th>Salt</th>
            <th>Sugar</th>
            <th>Fat</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{{ nutrientInfo?.calories }}kcal</td>
            <td>{{ nutrientInfo?.salt }}g</td>
            <td>{{ nutrientInfo?.sugar }}g</td>
            <td>{{ nutrientInfo?.fat }}g</td>
          </tr>
        </tbody>
      </nz-table>
    </div>
  `,
  styleUrl: './details.component.css',
})
export class DetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  nutrientService = inject(NutrientService);
  shortbreadDetailsId = -1;
  nutrientInfo: Nutrient | undefined;
  constructor() {
    this.shortbreadDetailsId = Number(this.route.snapshot.params['id']);
    this.nutrientInfo = this.nutrientService.getNutrientInfo(
      this.shortbreadDetailsId
    );
  }
}
