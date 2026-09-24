import { Routes } from '@angular/router';

//Páginas
import {Login} from './components/login/login';
import {Dashboard} from './components/dashboard/dashboard';

//Subpáginas
import {Home} from './pages/home/home';
import {Users} from './pages/users/users';
import {Students} from './pages/users/students/students';

//Estudiantes
import { StudentRegister } from './pages/users/students/student-register/student-register';

export const routes: Routes = [
    { path: 'login', component: Login },
    { 
        path: 'dashboard', 
        component: Dashboard,
        children: [
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: Home },
            { path: 'users', component: Users },
            { path: 'users/students', component: Students},
            { path: 'users/students/student-register', component: StudentRegister}
        ]
    },
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: '**', redirectTo: 'login' }
];