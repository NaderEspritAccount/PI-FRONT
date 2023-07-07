import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ChallengesService {
  private apiUrl = 'http://localhost:5000/challenges/';

  constructor(private http: HttpClient) { }

  getChallenges(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl)
      .pipe(
        map((response: any) => response.data) // Adjust this based on your API response structure
      );
  }
}
