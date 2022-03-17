import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_ROUTE } from '../routes/api-routes';
import { CommentIN, CommentOUT } from '../interfaces/comment';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private http: HttpClient) {}

  getComments(type: string, typeId: number): Observable<CommentOUT[]> {
    return this.http.get<CommentOUT[]>(`${API_ROUTE.comments}/${type}/${typeId}`);
  }

  addComment(comment: CommentIN): Observable<CommentOUT> {
    return this.http.post<CommentOUT>(API_ROUTE.comments, comment);
  }

  delete(commentId: number): Observable<undefined> {
    return this.http.delete<undefined>(`${API_ROUTE.comments}/${commentId}`);
  }
}
