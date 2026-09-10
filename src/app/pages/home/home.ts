import { Component } from '@angular/core';
import {CommonModule} from '@angular/common';

interface StatCard {
  id: number;
  title: string;
  count: number;
  subtitle: string;
  icon: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})

export class Home {

  stats: StatCard[] = [
    {
      id: 1,
      title: 'Alumnos',
      count: 150,
      subtitle: 'Alumnos activos',
      icon: 'bi-person'
    },

    {
      id: 2,
      title: 'Profesores',
      count: 30,
      subtitle: 'Profesores activos',
      icon: 'bi-person'
    },

    {
      id: 3,
      title: 'Grados',
      count: 50,
      subtitle: 'Grados activos',
      icon: 'bi-diagram-3'
    },

    {
      id: 4,
      title: 'Secciones',
      count: 120,
      subtitle: 'Secciones activas',
      icon: 'bi-diagram-3'
    },

    {
      id: 5,
      title: 'Cursos',
      count: 15,
      subtitle: 'Cursos activos',
      icon: 'bi-book'
    }

  ]
}
