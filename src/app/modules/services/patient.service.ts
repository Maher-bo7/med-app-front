import { Patient } from './../../models/patient';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PatientService {
  private readonly apiUrl: string = '';
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient) { }

  // Create
  createPAtient(patient:Patient): Observable<Patient> {
    let API_URL = `${this.apiUrl}/patient/add`;
    return this.http.post<Patient>(API_URL, patient)
      .pipe(
        catchError(this.error)
      )
  }

  // Read
  getAllpatients(): Observable<Patient[]> {
    return this.http.get<Patient[]>(`${this.apiUrl}/patient/all`);
  }
  getPatientById(id): Observable<Patient[]> {
    return this.http.get<Patient[]>(`${this.apiUrl}/patient/${id}`);
  }

  // Update
  updatePatient(patient :Patient): Observable<Patient> {
    let API_URL = `${this.apiUrl}/patient/update`;
    return this.http.put<Patient>(API_URL, patient, { headers: this.headers }).pipe(
      catchError(this.error)
    )
  }

  // Delete
  deletePatient(id): Observable<void> {
    var API_URL = `${this.apiUrl}/patient/delete/${id}`;
    return this.http.delete<void>(API_URL).pipe(
      catchError(this.error)
    )
  }

  // Handle Errors
  error(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }

}
