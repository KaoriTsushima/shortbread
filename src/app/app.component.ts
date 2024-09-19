import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ShortbreadDetailsComponent } from './shortbread-details/shortbread-details.component';
import { ShortbreadDetails } from './shortbread-details';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ShortbreadDetailsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'shortbread';
  name = 'kaori';
  morrisonsShortbread: ShortbreadDetails = {
    id: 1,
    name: 'shortbread fingar',
    brand: 'Morrisons',
    price: 1.0,
    comment: 'buttery',
  };
  aldiShortbread: ShortbreadDetails = {
    id: 1,
    name: 'shortbread fingar',
    brand: 'ALDI',
    price: 1.5,
  };
}
