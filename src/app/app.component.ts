import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ShortbreadDetailsComponent } from './shortbread-details/shortbread-details.component';

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
}
