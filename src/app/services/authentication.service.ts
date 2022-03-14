import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_ROUTE } from '../routes/api-routes';
import { User, UserOUT, UserToken } from '../interfaces/user';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private tokenName = 'token';

  constructor(private http: HttpClient, private router: Router) { }

  public logOn(identifiant: any): any{
    return this.http.post(API_ROUTE.logon, identifiant);
  }

  getToken(){
    return localStorage.getItem(this.tokenName);
  }

  // eslint-disable-next-line @typescript-eslint/ban-types
  seTtoken(data: Object){
    //@ts-ignore
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
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

  forgotPassword(email: string): Observable<any> {
    return this.http.post<any>(`${API_ROUTE.users}/forgot-password`, email);
  }


  setInLocalStorage(key: string, value: any): void {
    localStorage.setItem(key, value);
  }

  removeInLocalStorage(key: string): void {
    localStorage.removeItem(key);
  }

  logout(){
    localStorage.clear();
    //déconnection
    this.router.navigate(['/authentication/login']);
  }

  isLogged(){
    return this.getToken() !== null;
  }

  public userLoggedUsername(): string  {
    const token = this.tokenDecoded() as UserToken;
    const username = token.username;
    return username;
  }

  public userLoggedRoles(): string[] {
    const token = this.tokenDecoded() as UserToken;
    const roles = token.roles;
    return roles;
  }

  public tokenExpiration(): number {
    const token = this.tokenDecoded() as UserToken;
    const exp = token.exp;
    return exp;
  }

  public userLoggedEmail(): string {
    const token = this.tokenDecoded() as UserToken;
    const email = token.email;
    return email;
  }

  private tokenDecoded(): UserToken | boolean {
    const token = this.getToken();
    if (token) {
      const decodedToken = atob(token.split('.')[1]);
      const decodedTokenJsonFormat = JSON.parse(decodedToken);
      return decodedTokenJsonFormat;
    } else {
      return false;
    }
  }
}
