import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-student-register',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './student-register.html',
  styleUrl: './student-register.css',
})
export class StudentRegister {

  private fb = inject(FormBuilder);

  //FORMULARIO DEL ALUMNO
  studentForm: FormGroup = this.fb.group({
  

    //DATOS DEL ALUMNO
    student: this.fb.group({
      names: ['', [Validators.required, Validators.minLength(2)]],
      paternalSurname: ['', [Validators.required, Validators.minLength(2)]],
      maternalSurname: ['', [Validators.required, Validators.minLength(2)]],
      gender: ['', [Validators.required]],
      documentType: ['', [Validators.required]],
      documentNumber: ['', [Validators.required, Validators.minLength(8)]],
      birthdate: ['', [Validators.required]],
      // Datos Académicos
      level: ['', [Validators.required]],
      grade: ['', [Validators.required]],
      section: ['', [Validators.required]]
    })

  });

  onSubmit() {
    // VALIDAR TODOS LOS CAMPOS DEL FORMULARIO
    if (this.studentForm.invalid) {
      this.studentForm.markAllAsTouched();
      console.error('Por favor, llene todos los campos requeridos correctamente.');
      return; 
    }

    // Clonamos los datos para no alterar el formulario original en la vista
    const matriculaData = { ...this.studentForm.value };

    console.log('Datos del Alumno:', matriculaData.student);
    console.log('JSON completo para enviar al Backend:', matriculaData);
  }
}