import { Component } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { HeroSectionComponent } from "../hero-section/hero-section.component";
import { BookTableComponent } from '../../features/book-table/book-table.component';
@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [NavbarComponent, HeroSectionComponent, BookTableComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

}
