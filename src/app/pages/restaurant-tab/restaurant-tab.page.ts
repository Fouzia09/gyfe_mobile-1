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

  listrestaurants!: Restaurant[];
  isLoading = false;
  errorApi = false;
  success = false;
  restaurants!: RestaurantOUT[];


  constructor(
    private restaurantService: RestaurantService,
    //private matDialog: MatDialog,
    ) {
    this.getRestaurants();
   }

  // eslint-disable-next-line @angular-eslint/use-lifecycle-interface
  ngOnInit(): void {
  }

  getRestaurants(): void {
    let userLoggedInfo: UserOUT | string;
    userLoggedInfo = localStorage.getItem('userLoggedInfo') as string;
    userLoggedInfo = JSON.parse(userLoggedInfo) as UserOUT;
    this.restaurants = userLoggedInfo.restaurants as RestaurantOUT[];
    console.log(this.restaurants);
  }

  //  getRestaurants(){
  //     this.restaurantService.getRestaurants().subscribe(
  //       (      data: Restaurant[])=>{
  //         this.listrestaurants = data;
  //       }
  //     );
  //   };



}
