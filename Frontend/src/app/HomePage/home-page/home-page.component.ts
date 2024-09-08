import { Component } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { HeroSectionComponent } from "../hero-section/hero-section.component";

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [NavbarComponent, HeroSectionComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

}
