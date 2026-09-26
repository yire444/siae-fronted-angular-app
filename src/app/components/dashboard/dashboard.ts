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
      title: 'Personas',
      icon: 'bi-people-fill',
      role: 'ADMIN',
      isOpen: false,
      children: [
        { id: 21, title: 'Alumnos', icon: 'bi-person-badge', route: '/dashboard/students', role: 'ADMIN' },
        { id: 22, title: 'Profesores', icon: 'bi-person-video3', route: '/dashboard/teachers', role: 'ADMIN' },
        { id: 23, title: 'Apoderados', icon: 'bi-person-heart', route: '/dashboard/parents', role: 'ADMIN' },
        { id: 24, title: 'Personal', icon: 'bi-person-workspace', route: '/dashboard/staff', role: 'ADMIN' }
      ]
    },
    {
      id: 3,
      title: 'Académico',
      icon: 'bi-mortarboard-fill',
      role: 'ADMIN',
      isOpen: false,
      children: [
        { id: 31, title: 'Años', icon: 'bi-calendar-range', route: '/dashboard/academic-years', role: 'ADMIN' },
        { id: 32, title: 'Grados', icon: 'bi-diagram-3-fill', route: '/dashboard/grades', role: 'ADMIN' },
        { id: 33, title: 'Secciones', icon: 'bi-grid-fill', route: '/dashboard/sections', role: 'ADMIN' },
        { id: 34, title: 'Aulas', icon: 'bi-door-closed-fill', route: '/dashboard/classrooms', role: 'ADMIN' },
        { id: 35, title: 'Asignaturas', icon: 'bi-journal-bookmark-fill', route: '/dashboard/subjects', role: 'ADMIN' },
        { id: 36, title: 'Cursos', icon: 'bi-book-fill', route: '/dashboard/courses', role: 'ADMIN' }
      ]
    },
    {
      id: 4,
      title: 'Matrículas',
      icon: 'bi-file-earmark-text-fill',
      route: '/dashboard/enrollments',
      role: 'ADMIN'
    },
    {
      id: 5,
      title: 'Docentes',
      icon: 'bi-person-badge-fill',
      route: '/dashboard/teachers-management',
      role: 'ADMIN'
    },
    {
      id: 6,
      title: 'Horarios',
      icon: 'bi-calendar-fill',
      route: '/dashboard/schedules',
      role: 'ADMIN'
    },
    {
      id: 7,
      title: 'Pagos',
      icon: 'bi-cash-stack',
      route: '/dashboard/payments',
      role: 'ADMIN'
    },
    {
      id: 8,
      title: 'Usuarios',
      icon: 'bi-shield-lock-fill',
      route: '/dashboard/users',
      role: 'ADMIN'
    },
    {
      id: 9,
      title: 'Reportes',
      icon: 'bi-bar-chart-fill',
      route: '/dashboard/reports',
      role: 'ADMIN'
    },
    {
      id: 10,
      title: 'Configuración',
      icon: 'bi-gear-fill',
      route: '/dashboard/settings',
      role: 'ADMIN'
    }
  ];

  // AQUÍ AGREGAS EL MÉTODO:
  toggleMenu(item: MenuOption): void {
    if (item.children) {
      item.isOpen = !item.isOpen;
    }
  }

  
}