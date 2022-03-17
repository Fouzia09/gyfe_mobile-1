import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_ROUTE } from '../routes/api-routes';
import { FavoriteOUT, NewFavorite, UpdateFavorite } from '../interfaces/favorite';

@Injectable({
  providedIn: 'root'
})
export class FavoriteService {

  constructor(private http: HttpClient) {}

  getFavoriteByItemUrl(itemUrl: string): Observable<FavoriteOUT> {
    return this.http.get<FavoriteOUT>(`${API_ROUTE.favorites}/byItemUrl/${itemUrl}`);
  }

  addFavorite(fav: NewFavorite): Observable<FavoriteOUT> {
    return this.http.post<FavoriteOUT>(API_ROUTE.favorites, fav);
  }

  updateFavorite(id: number, fav: UpdateFavorite): Observable<FavoriteOUT> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/merge-patch+json; charset=utf-8' });
    return this.http.patch<FavoriteOUT>(`${API_ROUTE.favorites}/${id}`, fav, {headers});
  }

  deleteFavorite(id: number): Observable<undefined> {
    return this.http.delete<undefined>(`${API_ROUTE.favorites}/${id}`);
  }
}
