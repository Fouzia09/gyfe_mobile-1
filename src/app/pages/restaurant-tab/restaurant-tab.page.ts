/* eslint-disable @angular-eslint/use-lifecycle-interface */
import { Restaurant, RestaurantOUT } from './../../interfaces/restaurant';
import { Component } from '@angular/core';
import { RestaurantService } from 'src/app/services/restaurant.service';
import { UserOUT } from 'src/app/interfaces/user';

@Component({
  selector: 'app-restaurant-tab',
  templateUrl: 'restaurant-tab.page.html',
  styleUrls: ['restaurant-tab.page.scss']
})
export class RestaurantTabPage {

   //@ts-ignore
   listrestaurant: Restaurant[];

   constructor(
     private restaurantService: RestaurantService
   ) {
     this.getRestaurants();
    }

   ngOnInit(): void {
   }

   getRestaurants(){
     this.restaurantService.getRestaurants().subscribe(
       data=>{
         this.listrestaurant = data;
       }
     );
   }



}
