import { DetailRestaurantComponent } from './../restaurant-tab/detail-restaurant/detail-restaurant.component';
import { DetailRoomComponent } from './../room-tab/detail-room/detail-room.component';
import { UserPage } from './../authentication/user/user.page';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


import { TabsPageRoutingModule } from './tabs-routing.module';

import { TabsPage } from './tabs.page';
import { RoomTabPage } from '../room-tab/room-tab.page';
import { RestaurantTabPage } from '../restaurant-tab/restaurant-tab.page';
import { LoginPage } from '../authentication/login/login.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TabsPageRoutingModule,
    ComponentsModule,
    RouterModule
  ],
  declarations: [
    TabsPage,
    RoomTabPage,
    RestaurantTabPage,
    LoginPage,
    DetailRoomComponent,
    DetailRestaurantComponent,
    UserPage
  ]
})
export class TabsPageModule {}
