import { Injectable } from '@angular/core';
import { ShortbreadDetails } from '../models/shortbread-details';

@Injectable({
  providedIn: 'root',
})
export class ShortbreadService {
  shortbreadList: ShortbreadDetails[] = [
    {
      id: 1,
      name: 'shortbread finger',
      brand: 'Morrisons',
      price: 1.0,
      rating: 4,
      comment: 'buttery',
    },
    {
      id: 2,
      name: 'shortbread finger',
      brand: 'ALDI',
      price: 1.5,
      rating: 4.5,
      comment: 'love it',
    },
    {
      id: 3,
      name: 'shortbread finger',
      brand: 'Lidl',
      price: 1.2,
      rating: 3,
      comment: 'floury',
    },
  ];

  constructor() {}
}
