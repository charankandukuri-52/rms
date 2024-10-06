import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RegistrationComponent } from "../../features/restaurant-registration/registration/registration.component";

import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-manage-restuarants',
  standalone: true,
  imports: [RegistrationComponent, CommonModule],
  templateUrl: './manage-restuarants.component.html',
  styleUrl: './manage-restuarants.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA] 
})
export class ManageRestuarantsComponent {
activeTab:string = 'add'
setActiveTab(tabName:string) {
  this.activeTab = tabName
}
}
