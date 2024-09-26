import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ShortbreadDetails } from '../shortbread-details';
import { NutrientService } from '../nutrient.service';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [],
  template: ` <p>details works! {{ shortbreadDetailsId }}</p>`,
  styleUrl: './details.component.css',
})
export class DetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  shortbreadDetailsId = -1;
  constructor() {
    this.shortbreadDetailsId = Number(this.route.snapshot.params['id']);
  }
}
