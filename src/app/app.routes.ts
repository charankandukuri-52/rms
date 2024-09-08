import { Routes } from '@angular/router';

import { HomePageComponent } from './HomePage/home-page/home-page.component';
import { LoginComponent } from './Login/login/login.component';
import { DashboardComponent } from './Admin/dashboard/dashboard.component';

export const routes: Routes = [
    {
        path:'', component: HomePageComponent
    }, 
    {
        path: 'login', component: LoginComponent
    }, {
        path:'dashboard', component: DashboardComponent
    }
];
