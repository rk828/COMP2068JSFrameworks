import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private apiUrl = 'https://your-api-url.com/students'; 

  constructor(private http: HttpClient) { }

  getAllStudents(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  getStudentById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  addStudent(studentData: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, studentData);
  }

  updateStudent(id: number, studentData: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, studentData);
  }

  deleteStudent(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }
}
