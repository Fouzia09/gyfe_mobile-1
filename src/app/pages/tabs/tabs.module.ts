import { UserPage } from './../authentication/user/user.page';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

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
    TabsPageRoutingModule,
    ComponentsModule
  ],
  declarations: [
    TabsPage,
    RoomTabPage,
    RestaurantTabPage,
    LoginPage,
    UserPage
  ]
})
export class TabsPageModule {}
