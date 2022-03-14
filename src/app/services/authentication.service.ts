import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_ROUTE } from '../routes/api-routes';
import { User, UserOUT } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private tokenName = 'token';

  constructor(private http: HttpClient) { }

  public logOn(identifiant:any): any{
    return this.http.post(API_ROUTE.logon, identifiant);
  }

  getToken(){
    return localStorage.getItem(this.tokenName);
  }

  seTtoken(data: Object){
    //@ts-ignore
    data.hasOwnProperty('token') ? localStorage.setItem(this.tokenName,data.token) : this.logout();
  }

  getUsers(): Observable<User[]>{
    return this.http.get<User[]>(API_ROUTE.users);
  }

  getUser(id: number){
    return this.http.get(`${API_ROUTE.users}/${id}`);
  }

  postUser(user: User): Observable<User>{
    console.log(user);
    return this.http.post<User>(API_ROUTE.users, user);
  }

  deleteUser(id: number){
    return this.http.delete(`${API_ROUTE.users}/${id}`);
  }

  updateUser(user: User, id: number): Observable<User>{
    return this.http.put<User>(`${API_ROUTE.users}/${id}`, user);
  }

  getCurrentUser(): Observable<User[]>{
    return this.http.get<User[]>(API_ROUTE.currentUser);
  }

  patchResetPasswordUser(user: User, email: string): Observable<User>{
    return this.http.patch<User>(`${API_ROUTE.users}/${email}`+`/reset-password`, user);
  }

  getUserByUsername(username: string): Observable<UserOUT> {
    return this.http.get<UserOUT>(`${API_ROUTE.users}/findByUsername/${username}`);
  }

  resetPassword(body: any, email: string): Observable<any> {
    return this.http.post<any>(`${API_ROUTE.users}/resetPassword/${email}`, body);
  }
}
