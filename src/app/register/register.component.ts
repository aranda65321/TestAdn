import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { FormControl } from '@angular/forms';
import { AdnApiRestServiceService } from '../services/adn-api-rest-service.service';
import { User } from '../models/User';

@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  username = new FormControl('');
  password =  new FormControl('');
  isCreated = false;

  constructor(private router:Router, private adnApiRestService: AdnApiRestServiceService) { }

  ngOnInit(): void {
  }

  registerUser(){
    if(this.username.value.length > 0 && this.password.value.length > 0){

      this.adnApiRestService.createUser(new User(0,this.username.value, this.password.value)).subscribe((create:boolean) => {
        if(create){
          this.router.navigate(['/login']);
        }else{
          alert("El usuario ya existe")
        }
      });
    }else{
      alert('Por favor rellenar los campos')
    }
  }

}
