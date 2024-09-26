import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ShortbreadDetails } from '../shortbread-details';
import { NutrientService } from '../nutrient.service';
import { Nutrient } from '../nutrient';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [],
  template: ` <p>Calories: {{ nutrientInfo?.calories }}</p>
    <p>sugar: {{ nutrientInfo?.sugar }}</p>
    <p>salt: {{ nutrientInfo?.salt }}</p>`,
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
