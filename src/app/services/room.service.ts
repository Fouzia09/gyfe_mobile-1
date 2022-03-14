import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Room, RoomOUT } from '../interfaces/room';
import { API_ROUTE } from '../routes/api-routes';

@Injectable({
  providedIn: 'root'
})
export class RoomService {

  constructor(private http: HttpClient) {}

  getListRoom(): Observable<Room[]> {
    return this.http.get<Room[]>(API_ROUTE.rooms);
  }

  // Recuperer detail room par son id
  getRoom(id: number): Observable<Room> {
    return this.http.get<Room>(`${API_ROUTE.rooms}/${id}`);
  }

  postRoom(room: Room): Observable<Room>{
    return this.http.post<Room>(API_ROUTE.rooms, room);
  }

  deleteRoom(id: number){
    return this.http.delete(`${API_ROUTE.rooms}/${id}`);
  }

  updateRoom(room: Room, id: number): Observable<Room>{
    return this.http.put<Room>(`${API_ROUTE.rooms}/${id}`, room);
  }

  getThreeLastRooms(): Observable<RoomOUT[]> {
    return this.http.get<RoomOUT[]>(`${API_ROUTE.rooms}/threeLast`);
  }
}
