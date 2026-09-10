import { Routes } from '@angular/router';

//Páginas
import {Login} from './components/login/login';
import {Dashboard} from './components/dashboard/dashboard';

//Subpáginas
import {Home} from './pages/home/home';
import { Users } from './pages/users/users';

export const routes: Routes = [
    { path: 'login', component: Login },
    { 
        path: 'dashboard', 
        component: Dashboard,
        children: [
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: Home },
            { path: 'users', component: Users }
        ]
    },
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: '**', redirectTo: 'login' }
];