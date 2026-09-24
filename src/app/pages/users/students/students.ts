import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Student } from './student.model';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-students',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './students.html',
  styleUrl: './students.css',
})
export class Students {

  studentsList: Student[]=[
    {
      id: 1,
      name: 'Carlos',
      paternalSurname: 'García',
      maternalSurname: 'López',
      birthDate: new Date('2010-05-12'),
      dni: 74839201,
      address: 'Av. Los Próceres 123',
      grade: '3ro',
      section: 'A',
      level: 'Secundaria',
      status: 'Activo'
    },
    {
      id: 2,
      name: 'Ana',
      paternalSurname: 'Torres',
      maternalSurname: 'Rojas',
      birthDate: new Date('2011-08-20'),
      dni: 71283940,
      address: 'Jr. Las Flores 456',
      grade: '2do',
      section: 'B',
      level: 'Secundaria',
      status: 'Activo'
    }
  ];
}
