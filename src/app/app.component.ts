import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ShortbreadDetailsComponent } from './shortbread-details/shortbread-details.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NzIconModule, provideNzIconsPatch } from 'ng-zorro-antd/icon';
import { HomeOutline } from '@ant-design/icons-angular/icons';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    ShortbreadDetailsComponent,
    CommonModule,
    RouterModule,
    HomeComponent,
    NzIconModule,
  ],
  providers: [provideNzIconsPatch([HomeOutline])],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {}
