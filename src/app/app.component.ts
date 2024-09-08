import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { environment } from '../../environments/enviroment';
import { initFlowbite } from 'flowbite';
import { RouterModule, RouterLinkActive, RouterOutlet } from '@angular/router'; 
import { FlowbiteService } from '../Flowbite/flowbite.service';
@Component({
  standalone:true,
  selector: 'app-root',
  imports:[RouterModule,RouterLinkActive, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
 title =  'ping-food'
 constructor(private flowbiteService: FlowbiteService) {}
 ngOnInit(): void {
  this.flowbiteService.loadFlowbite(flowbite => {
    console.log('Flowbite loaded', flowbite);
  });
     
    }
  }

