import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_ROUTE } from './../routes/api-routes';
import { HttpClient } from '@angular/common/http';
import { Restaurant } from './../interfaces/restaurant';
import { RestaurantOUT } from '../interfaces/restaurant';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  constructor(private http: HttpClient) { }

  getRestaurants(): Observable<Restaurant[]>{
    return this.http.get<Restaurant[]>(API_ROUTE.restaurants);
  }

  getRestaurant(id: number): Observable<Restaurant>{
    return this.http.get<Restaurant>(`${API_ROUTE.restaurants}/${id}`);
  }

  postRestaurant(restaurant: Restaurant): Observable<Restaurant>{
    return this.http.post<Restaurant>(API_ROUTE.restaurants, restaurant);
  }

  deleteRestaurant(id: number){
    return this.http.delete(`${API_ROUTE.restaurants}/${id}`);
  }

  updateRestaurant(restaurant: Restaurant, id: number): Observable<Restaurant>{
    return this.http.put<Restaurant>(`${API_ROUTE.restaurants}/${id}`, restaurant);
  }

  getThreeLastRestaurants(): Observable<RestaurantOUT[]> {
    return this.http.get<RestaurantOUT[]>(`${API_ROUTE.restaurants}/threeLast`);
  }
}
