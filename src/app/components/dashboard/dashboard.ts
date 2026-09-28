import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';

export interface MenuOption {
  id: number;
  title: string;
  icon: string;
  route?: string;
  role: string;
  children?: MenuOption[];
  isOpen?: boolean;
}

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {

  readonly navOptions: MenuOption[] = [
    {
      id: 1,
      title: 'Inicio',
      icon: 'bi-house-fill',
      route: '/dashboard/home',
      role: 'ADMIN'
    },
    {
      id: 2,
      title: 'Alumnos y Familia',
      icon: 'bi-people-fill',
      role: 'ADMIN',
      isOpen: false,
      children: [
        { id: 21, title: 'Estudiantes', icon: 'bi-person-fill', route: '/dashboard/users/students', role: 'ADMIN' },
        { id: 22, title: 'Apoderados', icon: 'bi-person-bounding-box', route: '/dashboard/guardians', role: 'ADMIN' },
        { id: 23, title: 'Contactos', icon: 'bi-telephone-fill', route: '/dashboard/emergency-contact', role: 'ADMIN' }
      ]
    },
    {
      id: 3,
      title: 'Gestión Académica',
      icon: 'bi-mortarboard-fill',
      role: 'ADMIN',
      isOpen: false,
      children: [
        { id: 31, title: 'Cursos', icon: 'bi-book-fill', route: '/dashboard/courses', role: 'ADMIN' },
        { id: 32, title: 'Grados', icon: 'bi-layers-fill', route: '/dashboard/grades', role: 'ADMIN' },
        { id: 33, title: 'Secciones', icon: 'bi-collection-fill', route: '/dashboard/sections', role: 'ADMIN' },
        { id: 34, title: 'Docentes', icon: 'bi-person-badge-fill', route: '/dashboard/teachers', role: 'ADMIN' }, 
        { id: 35, title: 'Calificaciones', icon: 'bi-diagram-3-fill', route: '/dashboard/notes', role: 'ADMIN' },
        { id: 36, title: 'Asistencias', icon: 'bi-ui-checks', route: '/dashboard/asists', role: 'ADMIN' } 
      ]
    },
    {
      id: 4,
      title: 'Horarios',
      icon: 'bi-calendar-week-fill',
      route: '/dashboard/schedules',
      role: 'ADMIN'
    },
    {
      id: 5,
      title: 'Pagos',
      icon: 'bi-cash-stack',
      route: '/dashboard/payments',
      role: 'ADMIN'
    },
    {
      id: 6,
      title: 'Mi perfil',
      icon: 'bi-person-circle', 
      route: '/dashboard/profile', 
      role: 'ADMIN'
    }
  ];

  toggleMenu(item: MenuOption): void {
    if (item.children) {
      item.isOpen = !item.isOpen;
    }
  }
}