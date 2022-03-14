import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';
import { RoomTabPage } from '../room-tab/room-tab.page';
import { RestaurantTabPage } from '../restaurant-tab/restaurant-tab.page';
import { Tab3Page } from '../tab3/tab3.page';

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
        path: 'tab3',
        component: Tab3Page
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
