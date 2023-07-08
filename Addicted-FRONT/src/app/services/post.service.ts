import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  constructor(private http: HttpClient) {}
  getpostes(): Observable<any[]> {
    return this.http.get<any[]>(`http://localhost:5000/posts`);
  }

  getpost() {
    return this.http.get('http://localhost:5000/posts');
  }

  // addPost(postData: any) {
  //   return this.http.post('/api/addpost', postData);
  // }

  addPost(postData: any) {
    return this.http.post('http://localhost:5000/posts/addpost', postData);
  }

  addComment(comment) {
    return this.http.post('http://localhost:5000/comms/addcomm', comment);
  }
  likeDislikePost(data, id_post) {
    return this.http.patch(
      'http://localhost:5000/likes/updateLike/' + id_post,
      data
    );
  }

  downloadMediaFromUser(fileName: any): Observable<Blob> {
    return this.http.get('http://localhost:5000/posts/image/' + fileName, {
      responseType: 'blob',
    });
  }

}
