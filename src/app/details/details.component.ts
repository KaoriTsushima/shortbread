import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ShortbreadDetails } from '../shortbread-details';
import { NutrientService } from '../nutrient.service';
import { Nutrient } from '../nutrient';
import { NzTableModule } from 'ng-zorro-antd/table';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [NzTableModule, CommonModule, ReactiveFormsModule],
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
    <section class="listing-apply">
      <h2 class="section-heading">Apply your interest</h2>
      <form [formGroup]="applyForm" (submit)="submitApplication()">
        <label for="first-name">First Name</label>
        <input id="first-name" type="text" formControlName="firstName" />
        <br />

        <label for="last-name">Last Name</label>
        <input id="last-name" type="text" formControlName="lastName" />
        <br />

        <label for="email">Email</label>
        <input id="email" type="email" formControlName="email" />
        <br />
        <button type="submit" class="primary">Apply now</button>
      </form>
    </section>
  `,
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
