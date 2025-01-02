import { Component, Input } from '@angular/core';
import { ShortbreadDetails } from '../models/shortbread-details';
import { NzRateModule } from 'ng-zorro-antd/rate';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-shortbread-details',
  standalone: true,
  imports: [FormsModule, NzRateModule, RouterLink, RouterOutlet],
  templateUrl: './shortbread-details.component.html',

  styleUrl: './shortbread-details.component.css',
})
export class ShortbreadDetailsComponent {
  @Input() shortbreadDetails!: ShortbreadDetails;
}
