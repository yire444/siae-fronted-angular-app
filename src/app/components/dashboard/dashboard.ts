import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';

interface MenuOption{
  id: number;
  title: string;
  icon: string;
  route: string;
  role: string;
}

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})

export class Dashboard {

  readonly navOptions: MenuOption[]= [
    {
      id: 1,
      title: 'Inicio',
      icon: 'bi-house-fill',
      route: '/dashboard/home',
      role: 'ADMIN'
    },

    {
      id: 2,
      title: 'Gestión académica',
      icon: 'bi-mortarboard-fill',
      route: '/dashboard/academic-management',
      role: 'ADMIN'
    },

    {
      id: 3,
      title: 'Grados/Secciones',
      icon: 'bi-diagram-3-fill',
      route: '/dashboard/grader-sections',
      role: 'ADMIN'
    },

    {
      id: 4,
      title: 'Cursos',
      icon: 'bi-book-fill',
      route: '/dashboard/courses',
      role: 'ADMIN'
    },

    {
      id: 5,
      title: 'Gestión de usuarios',
      icon: 'bi-people-fill',
      route: '/dashboard/users',
      role: 'ADMIN'
    },

    {
      id: 6,
      title: 'Gestión de personal',
      icon: 'bi-people-fill',
      route: '/dashboard/personnel',
      role: 'ADMIN'
    },

    {
      id: 7,
      title: 'Horarios',
      icon: 'bi-calendar-fill',
      route: '/dashboard/schedules',
      role: 'ADMIN'
    },

    {
      id: 8,
      title: 'Pagos',
      icon: 'bi-cash',
      route: '/dashboard/payments',
      role: 'ADMIN'
    }

  ]

}
