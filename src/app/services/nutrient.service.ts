import { Injectable, Input } from '@angular/core';
import { Nutrient } from '../models/nutrient';

@Injectable({
  providedIn: 'root',
})
export class NutrientService {
  @Input() nutrientdata!: Nutrient;
  nutrientList: Nutrient[] = [
    {
      shortBreadId: 1,
      calories: 105,
      salt: 0.12,
      sugar: 3,
      fat: 5.7,
    },
    {
      shortBreadId: 2,
      calories: 92,
      salt: 0.1,
      sugar: 2.2,
      fat: 4.8,
    },
    {
      shortBreadId: 3,
      calories: 91,
      salt: 0.07,
      sugar: 2.5,
      fat: 4.8,
    },
    {
      shortBreadId: 4,
      calories: 90,
      salt: 0.12,
      sugar: 2.4,
      fat: 4.8,
    },
    {
      shortBreadId: 5,
      calories: 103,
      salt: 0.1,
      sugar: 3.9,
      fat: 5.3,
    },
    {
      shortBreadId: 6,
      calories: 103,
      salt: 0.14,
      sugar: 3.6,
      fat: 5.3,
    },
    {
      shortBreadId: 7,
      calories: 103.2,
      salt: 0.15,
      sugar: 2.94,
      fat: 5.64,
    },
    {
      shortBreadId: 8,
      calories: 105,
      salt: 0.12,
      sugar: 3,
      fat: 5.8,
    },
    {
      shortBreadId: 9,
      calories: 72,
      salt: 0.1,
      sugar: 2.4,
      fat: 4.2,
    },
    {
      shortBreadId: 10,
      calories: 106,
      salt: 0.12,
      sugar: 3.1,
      fat: 5.9,
    },
    {
      shortBreadId: 11,
      calories: 108,
      salt: 0.11,
      sugar: 3.1,
      fat: 6.5,
    },
    {
      shortBreadId: 12,
      calories: 97.6,
      salt: 0.12,
      sugar: 4.14,
      fat: 4.6,
    },
    {
      shortBreadId: 13,
      calories: 106.6,
      salt: 0.14,
      sugar: 3.24,
      fat: 6.06,
    },
    {
      shortBreadId: 14,
      calories: 105.8,
      salt: 0.174,
      sugar: 4.08,
      fat: 6,
    },
    {
      shortBreadId: 15,
      calories: 78,
      salt: 0.13,
      sugar: 0.2,
      fat: 4,
    },
    {
      shortBreadId: 16,
      calories: 107.14,
      salt: 0.13,
      sugar: 3.54,
      fat: 5.4,
    },
    {
      shortBreadId: 17,
      calories: 100.2,
      salt: 0.12,
      sugar: 4.6,
      fat: 5.4,
    },
    {
      shortBreadId: 18,
      calories: 103.8,
      salt: 0.22,
      sugar: 5.98,
      fat: 5.54,
    },
    {
      shortBreadId: 19,
      calories: 94,
      salt: 0.16,
      sugar: 3.4,
      fat: 4.6,
    },
    {
      shortBreadId: 20,
      calories: 91,
      salt: 0.08,
      sugar: 2.8,
      fat: 4.9,
    },
    {
      shortBreadId: 21,
      calories: 106,
      salt: 0.1,
      sugar: 4.2,
      fat: 5.8,
    },
  ];

  getNutrientInfo(id: number) {
    return this.nutrientList.find((nutrient) => nutrient.shortBreadId === id);
  }

  submitApplication(firstName: string, lastName: string, email: string) {
    console.log(
      `Your interest received: firstName: ${firstName}, lastName: ${lastName}, email: ${email}.`
    );
  }

  constructor() {}
}
