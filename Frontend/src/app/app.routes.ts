import { Routes } from '@angular/router';

import { HomePageComponent } from './HomePage/home-page/home-page.component';
import { LoginComponent } from './features/auth/login/login.component';
import { DashboardComponent } from './Admin/dashboard/dashboard.component';
import { ManageRestuarantsComponent } from './app-data/manage-restuarants/manage-restuarants.component';
import { ChangePasswordComponent } from './features/auth/change-password/change-password.component';
import { BillPaymentComponent } from './features/bill-payment/bill-payment/bill-payment.component';
import { BookTableComponent } from './features/book-table/book-table.component';
import { RegistrationComponent } from './features/restaurant-registration/registration/registration.component';
import { SignupComponent } from './features/auth/signup/signup.component';

export const routes: Routes = [
    {
        path: '', 
        component: HomePageComponent
    },
    {
        path: 'register', 
        component: SignupComponent
    },
    {
        path: 'login', 
        component: LoginComponent
    },
    {
        path: 'dashboard', 
        component: DashboardComponent
    },
    {
        path: 'manage-restuarants', // Fixed typo from 'restuarants' to 'restaurants'
        component: ManageRestuarantsComponent
    },
    {
        path: 'change-password', 
        component: ChangePasswordComponent
    },
    {
        path: 'bill-payment', 
        component: BillPaymentComponent
    },
    {
        path: 'book-table', 
        component: BookTableComponent
    },
    {
        path: '**', 
        pathMatch: 'full', 
        redirectTo: '' // Redirect to home for any unknown routes
    }
];
