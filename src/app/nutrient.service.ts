import { Injectable, Input } from '@angular/core';
import { Nutrient } from './nutrient';

@Injectable({
  providedIn: 'root',
})
export class NutrientService {
  @Input() nutrientdata!: Nutrient;
  nutrientList: Nutrient[] = [
    {
      id: 1,
      calory: 100,
      salt: 1,
      sugar: 2,
      fat: 5,
    },
    {
      id: 2,
      calory: 110,
      salt: 1.2,
      sugar: 2,
      fat: 6,
    },
    {
      id: 3,
      calory: 105,
      salt: 1,
      sugar: 3,
      fat: 5.5,
    },
  ];

  constructor() {}
}
