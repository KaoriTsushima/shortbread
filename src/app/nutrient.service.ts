import { Injectable, Input } from '@angular/core';
import { Nutrient } from './nutrient';

@Injectable({
  providedIn: 'root',
})
export class NutrientService {
  @Input() nutrientdata!: Nutrient;
  nutrientList: Nutrient[] = [
    {
      shortBreadId: 1,
      calories: 100,
      salt: 1,
      sugar: 2,
      fat: 5,
    },
    {
      shortBreadId: 2,
      calories: 110,
      salt: 1.2,
      sugar: 2,
      fat: 6,
    },
    {
      shortBreadId: 3,
      calories: 105,
      salt: 1,
      sugar: 3,
      fat: 5.5,
    },
  ];

  getNutrientInfo(id: number) {
    return this.nutrientList.find((nutrient) => nutrient.shortBreadId === id);
  }

  constructor() {}
}
