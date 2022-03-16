import { UserPage } from './../authentication/user/user.page';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';
import { RestaurantTabPage } from '../restaurant-tab/restaurant-tab.page';
import { LoginPage } from '../authentication/login/login.page';
import { RoomTabPage } from '../room-tab/room-tab.page';
import { DetailRoomComponent } from '../room-tab/detail-room/detail-room.component';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'rooms',
        component: RoomTabPage
      },
      {
        path: 'restaurants',
        component: RestaurantTabPage
      },
      {
        path: 'login',
        component: LoginPage
      },
      {
        path: 'rooms/detail/:key',
        component: DetailRoomComponent
      },
      {
        path: 'restaurant/detail/:key',
        component: DetailRoomComponent
      },
      {
        path: 'user',
        component: UserPage
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/rooms',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
