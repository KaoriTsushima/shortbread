import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShortbreadDetailsComponent } from '../shortbread-details/shortbread-details.component';
import { ShortbreadService } from '../services/shortbread.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ShortbreadDetailsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  shortbreadList: any;
  constructor(private shortBreadService: ShortbreadService) {
    this.shortbreadList = this.shortBreadService.getShortbreadList();
  }
}
