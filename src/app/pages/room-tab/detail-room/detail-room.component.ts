import { RoomService } from 'src/app/services/room.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Room } from 'src/app/interfaces/room';

@Component({
  selector: 'app-detail-room',
  templateUrl: './detail-room.component.html',
  styleUrls: ['./detail-room.component.scss'],
})
export class DetailRoomComponent implements OnInit {

  id!: number;
  room!: Room;

  constructor(private route: ActivatedRoute, private roomService: RoomService) { }

  ngOnInit(): void {
    this.id = +this.route.snapshot.url[2].path;
    this.getRoom(this.id);

  }
  getRoom(roomId: number){
    this.roomService.getRoom(roomId).subscribe(
      data=>{
        this.room = data;
      }
    );
  }

}
