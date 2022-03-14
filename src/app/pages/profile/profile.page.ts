import { AuthenticationService } from './../../services/authentication.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { User } from 'ionic';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

    //@ts-ignore
    currentuser: User;

    username!: string;
    roles!: string[];
    email!: string;
    constructor(
      private auth: AuthenticationService,
      private router: Router,
      private currentuserService: UserService,
    ) { }

    ngOnInit(): void {
       this.username =this.auth.userLoggedUsername();
       this.roles =this.auth.userLoggedRoles();
      this.email = this.auth.userLoggedEmail();

      //la déconnection
      if(!this.auth.isLogged()){
        this.router.navigate(['/authentication/login']);
      }

      this.getCurrentUser();
    }

    getCurrentUser(){
      this.currentuserService.getCurrentUser().subscribe(
        (data)=>{
          //@ts-ignore
          this.currentuser = data;
        }
      );
    }

    //déconnexion
    logout(){
      this.auth.logout();
    }

    /* onOpenDialogEditPassword(currentuser: User) {
      let dialogRef = this.matDialog.open(PasswordEditComponent,
        {
          data: {
            id: currentuser.id,
            plainPassword: currentuser.plainPassword,
          },
          width: "500px",
          height: "450px",
        })
    } */

  }
