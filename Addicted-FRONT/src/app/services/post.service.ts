import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }
  getpostes(): Observable<any[]> {
    return this.http.get<any[]>(`http://localhost:5000/posts`)
      
  }

  getpost()
  {
    return this.http.get('http://localhost:5000/posts');
  }

  // addPost(postData: any) {
  //   return this.http.post('/api/addpost', postData);
  // }

  addPost(postData: any) {
    return this.http.post('http://localhost:5000/posts/addpost', postData);
  }
  
}
