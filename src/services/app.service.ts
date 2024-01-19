import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Medicine } from '../models/medicine.model';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  private apiUrl = environment.apiUrl;
  constructor(private http: HttpClient) {}

  addMedicine(medicine: Medicine): Observable<any> {
    return this.http.post(`${this.apiUrl}/api/medi`, medicine);
  }

  getMedicine(): Observable<Medicine[]> {
    return this.http.get<Medicine[]>(`${this.apiUrl}/api/medi`);
  }
}
