import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { AdnApiRestServiceService } from 'src/app/services/adn-api-rest-service.service';
import { User } from 'src/app/models/User';
import { Router } from '@angular/router';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  username = new FormControl('');
  password =  new FormControl('');


  constructor( 
    private adnApiRestService: AdnApiRestServiceService,
    private router: Router
    ) { }

  ngOnInit(): void {
    if(this.adnApiRestService.getUserName().length > 0){
      this.router.navigate(['/formMatrix']);
    }
  }

  loginUser(){
    var activate: boolean;
    this.adnApiRestService.loginUserApiRest(new User(0, this.username.value, this.password.value))
    .subscribe(exist => exist ? this.router.navigate(['/formMatrix']) : this.router.navigate(['']));
  }

  register(){
    this.router.navigate(['/register']);
  }
}
