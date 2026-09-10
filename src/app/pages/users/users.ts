import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './users.html',
  styleUrl: './users.css',
})
export class Users {

  cardUser = [
    {
      id: 1,
      userType: 'Alumnos',
      description: 'Gestión de matrículas y datos de estudiantes.',
      icon: 'bi-mortarboard-fill', 
      url: '/dashboard/users/students'
    },
    {
      id: 2,
      userType: 'Padres',
      description: 'Gestión de apoderados y accesos al sistema.',
      icon: 'bi-people-fill', 
      url: '/dashboard/users/parents'
    }
  ];
}