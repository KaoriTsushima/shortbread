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
      brand: "Sainsbury's",
      price: 0.8,
      rating: 3,
      comment: "very crunchy but less buttery than tesco's one",
    },
    {
      id: 2,
      name: 'shortbread finger',
      brand: 'Tesco',
      price: 0.8,
      rating: 4.5,
      comment: 'soft and good butter taste-standerd shortbread',
    },
    {
      id: 3,
      name: 'Belmont',
      brand: 'Aldi',
      price: 0.42,
      rating: 3,
      comment: "good butter smell but morrison's is better than this",
    },
    {
      id: 4,
      name: "McAllister's",
      brand: 'Lidl',
      price: 0.42,
      rating: 2,
      comment: 'dry and not enough butter taste',
    },
    {
      id: 5,
      name: 'Specially Selected ',
      brand: 'Aldi',
      price: 0.99,
      rating: 5,
      comment:
        'texture and taste are good - quick to go bad (becomes soft and loses taste)',
    },
    {
      id: 6,
      name: 'Deluxe',
      brand: 'Lidl',
      price: 1.44,
      rating: 4,
      comment: 'rumbly and sweet but less buttery',
    },
    {
      id: 7,
      name: 'shortbread finger',
      brand: 'Marks & Spencer',
      price: 5,
      rating: 3.5,
      comment: 'buttery but a little dry',
    },
    {
      id: 8,
      name: 'shortbread finger',
      brand: 'Waitrose',
      price: 0.8,
      rating: 4,
      comment: 'crunchy and crumbly',
    },
    {
      id: 9,
      name: 'Waitrose Duchy Organic',
      brand: 'Waitrose',
      price: 2.25,
      rating: 3.8,
      comment: 'soft texture and taste but a little salty',
    },
    {
      id: 10,
      name: 'Waitrose Duchy Organic',
      brand: 'Coop',
      price: 0.8,
      rating: 3,
      comment: "more dry crunchy than sainsbury's one",
    },
    {
      id: 11,
      name: 'Extra Special',
      brand: 'Asda',
      price: 1.52,
      rating: 3,
      comment: 'smells buttery but taste not buttery',
    },
    {
      id: 12,
      name: 'Highland Speciality',
      brand: 'Farmfoods',
      price: 0.95,
      rating: 1,
      comment: 'dry and no taste of butter',
    },
    {
      id: 13,
      name: 'Shortbread Finger',
      brand: 'Walkers',
      price: 1.79,
      rating: 5,
      comment: 'good butter taste',
    },
    {
      id: 14,
      name: 'Slow bake',
      brand: 'Walkers',
      price: 2.59,
      rating: 2.5,
      comment: 'taste a little weird like wheat? but good texture',
    },
    {
      id: 15,
      name: 'Shortbread Finger',
      brand: 'Boots',
      price: 2.5,
      rating: 1.5,
      comment: 'quite dry but better taste than highland speciallity',
    },
    {
      id: 16,
      name: 'Shortbread Finger',
      brand: "Dean's",
      price: 2,
      rating: 5,
      comment:
        'texture is very good - soft and crumbly, like flour, and melts in the mouth - but a little messy-texture is good but not like a shortbread',
    },
    {
      id: 17,
      name: 'Shortbread Finger',
      brand: 'Whittard',
      price: 8,
      rating: 5,
      comment: 'very good balance of taste',
    },
    {
      id: 18,
      name: 'V&A',
      brand: 'John Lewis',
      price: 6.5,
      rating: 4,
      comment: 'very crunchy but too salty and sweet',
    },
    {
      id: 19,
      name: 'Shortbread Finger',
      brand: "Paterson's",
      price: 1,
      rating: 2,
      comment: 'smells buttery but taste not butter, just flour and dry',
    },
    {
      id: 20,
      name: 'Shortbread Finger',
      brand: "Morrison's",
      price: 0.45,
      rating: 5,
      comment: 'good butter taste and sweet',
    },
    {
      id: 21,
      name: "Morrison's The Best",
      brand: "Morrison's",
      price: 1.5,
      rating: 4,
      comment: 'texture is good but a little salty',
    },
  ];
  constructor() {}

  getShortbreadList() {
    return this.shortbreadList;
  }
}
