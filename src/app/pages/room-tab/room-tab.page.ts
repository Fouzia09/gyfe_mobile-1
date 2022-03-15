import { Component, OnInit, Input, } from '@angular/core';
import { Router } from '@angular/router';
import { Room, RoomOUT } from 'src/app/interfaces/room';
import { UserOUT } from 'src/app/interfaces/user';
import { RoomService } from 'src/app/services/room.service';

@Component({
  selector: 'app-room-tab',
  templateUrl: 'room-tab.page.html',
  styleUrls: ['room-tab.page.scss']
})
  export class RoomTabPage implements OnInit {

    @Input() pageId!: number;
  rooms!: Room[];
  id!: number;
  searchedItems!: Room[];
  // inputName!: string;
  // inputCity!: string;
  // inputCountry!: string;
  nameSearch = '';
  citySearch = '';
  countrySearch = '';
  priceSearch!: number;


  constructor(private roomService: RoomService, private router: Router) {}

  ngOnInit() {
    this.roomService.getListRoom().subscribe((res: Room[]) => {
      this.rooms = res;

    });

  }


  }



