import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ShortbreadDetails } from '../models/shortbread-details';
import { NutrientService } from '../services/nutrient.service';
import { Nutrient } from '../models/nutrient';
import { NzTableModule } from 'ng-zorro-antd/table';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [NzTableModule, CommonModule, ReactiveFormsModule],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css',
})
export class DetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  nutrientService = inject(NutrientService);
  shortbreadDetailsId = -1;
  nutrientInfo: Nutrient | undefined;

  applyForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
  });

  constructor() {
    this.shortbreadDetailsId = Number(this.route.snapshot.params['id']);
    this.nutrientInfo = this.nutrientService.getNutrientInfo(
      this.shortbreadDetailsId
    );
  }

  submitApplication() {
    this.nutrientService.submitApplication(
      this.applyForm.value.firstName ?? '',
      this.applyForm.value.lastName ?? '',
      this.applyForm.value.email ?? ''
    );
  }
}
