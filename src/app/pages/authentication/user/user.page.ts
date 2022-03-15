import { User } from './../../../interfaces/user';
import { Router } from '@angular/router';
import { AuthenticationService } from './../../../services/authentication.service';
import { UserService } from './../../../services/user.service';
import { Validators, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.page.html',
  styleUrls: ['./user.page.scss'],
})
export class UserPage implements OnInit {

  isLoading: boolean = false;
  errorApi: boolean = false;
  success: boolean = false;
  //@ts-ignore
  email: FormControl;
  //@ts-ignore
  roles: FormControl;
  //@ts-ignore
  name: FormControl;
  //@ts-ignore
  plainPassword: FormControl;
  //@ts-ignore
  username: FormControl;
  //@ts-ignore
  userForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    //auth
    private auth: AuthenticationService,
    private router: Router
  ) { 
    this.createForm();
   }

  ngOnInit(): void {
    
  }

  onSubmit(){
    const body: User = {
      email : this.userForm.value.email,
      //@ts-ignore
      roles : [this.userForm.value.roles],
      name : this.userForm.value.name,
      plainPassword : this.userForm.value.plainPassword,
      username : this.userForm.value.username,
    }
    //@ts-ignore
    //body.roles.push(this.userForm.value.roles)

    //console.log(body);

    this.isLoading = true;

    this.userService.postUser(body).subscribe(
      (data: any)=>{
        this.success = true;
        this.isLoading = false;
        setTimeout(()=>{
          this.success = false;
        }, 5000)
        //console.log('OKK');
        //Nettoie le champs après l'envoie
        this.resetForm();
      },
      (error: any)=>{
        this.errorApi = true;
        this.isLoading = false;
        setTimeout(()=>{
          this.errorApi = false;
        }, 15000)
        //console.log('PAS ENVOYE');
        //Nettoie le champs après l'envoie
        this.resetForm();
      }
    );
  }

  private createForm(): void{
    this.email = this.fb.control('', [Validators.required, Validators.minLength(4)]);
    this.roles = this.fb.control('', [Validators.required, Validators.minLength(4)]);
    this.name = this.fb.control('', [Validators.required, Validators.minLength(4)]);
    this.plainPassword = this.fb.control('', [Validators.required, Validators.minLength(5)]);
    this.username = this.fb.control('', [Validators.required, Validators.minLength(4)]);
    this.userForm = this.fb.group({
      email: this.email,
      roles: this.roles,
      name: this.name,
      plainPassword: this.plainPassword,
      username: this.username
    });
  }

  private resetForm(): void{
    this.userForm.reset({
      email: '',
      roles: '',
      name: '',
      plainPassword: '',
      username: '',
    });
  }

}
