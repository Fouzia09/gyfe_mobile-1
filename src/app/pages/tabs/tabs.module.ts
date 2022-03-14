import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TabsPageRoutingModule } from './tabs-routing.module';

import { TabsPage } from './tabs.page';
import { RoomTabPage } from '../room-tab/room-tab.page';
import { RestaurantTabPage } from '../restaurant-tab/restaurant-tab.page';
import { Tab3Page } from '../tab3/tab3.page';
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
    Tab3Page
  ]
})
export class TabsPageModule {}
