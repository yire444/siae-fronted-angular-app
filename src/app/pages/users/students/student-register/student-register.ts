import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Student } from '../student.model'; 

@Component({
  selector: 'app-student-register',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './student-register.html',
  styleUrl: './student-register.css',
})
export class StudentRegister {

  private fb = inject(FormBuilder);

  studentForm: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    paternalSurname: ['', [Validators.required, Validators.minLength(2)]],
    maternalSurname: ['', [Validators.required, Validators.minLength(2)]],
    birthDate: ['', [Validators.required]],
    documentType:['',[Validators.required]],
    dni: ['', [Validators.required, Validators.pattern('^[0-9]{8}$')]],
    address: ['', [Validators.required]],
    grade: ['', [Validators.required]],
    section: ['', [Validators.required]],
    level: ['', [Validators.required]],
    status: ['Activo', [Validators.required]]
  });

  onSubmit() {
    if (this.studentForm.invalid) {
      this.studentForm.markAllAsTouched();
      return;
    }

    // 3. Obtenemos el objeto limpio con .value
    const newStudent: Student = this.studentForm.value;
    console.log('Datos válidos del alumno a registrar:', newStudent);
  }
}