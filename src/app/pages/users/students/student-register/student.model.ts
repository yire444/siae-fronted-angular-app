export interface createStudentDto {

    names: string;
    paternalSurname: string;
    maternalSurname?: string; 
    gender: string;
    documentType: string;
    documentNumber: string;
    birthdate: string; 
    level: string;
    grade: string;
    section: string;

}