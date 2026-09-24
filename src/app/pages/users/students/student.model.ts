export interface Student {
  id?: number;
  name: string;
  paternalSurname: string;
  maternalSurname: string;
  birthDate: Date;
  dni: number;
  address: string;
  grade: string;
  section: string;
  level: string;
  status: 'Activo' | 'Inactivo';
}