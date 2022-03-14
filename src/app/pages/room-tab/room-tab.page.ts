import { Component, OnInit } from '@angular/core';
import { Room, RoomOUT } from 'src/app/interfaces/room';
import { UserOUT } from 'src/app/interfaces/user';
import { RoomService } from 'src/app/services/room.service';

@Component({
  selector: 'app-room-tab',
  templateUrl: 'room-tab.page.html',
  styleUrls: ['room-tab.page.scss']
})
  export class RoomTabPage implements OnInit {

    listroom!: Room[];
    isLoading = false;
    errorApi = false;
    success = false;
    rooms!: RoomOUT[];


    constructor(
      private roomService: RoomService,
      //private matDialog: MatDialog,
      ) {
      this.getRooms();
     }

    ngOnInit(): void {
    }

    getRooms(): void {
      let userLoggedInfo: UserOUT | string;
      userLoggedInfo = localStorage.getItem('userLoggedInfo') as string;
      userLoggedInfo = JSON.parse(userLoggedInfo) as UserOUT;
      this.rooms = userLoggedInfo.rooms as RoomOUT[];
    }

    /* getRooms(){
      this.roomService.getListRoom().subscribe(
        (      data: Room[])=>{
          this.listroom = data;
        }
      )
    }
   */


  }



