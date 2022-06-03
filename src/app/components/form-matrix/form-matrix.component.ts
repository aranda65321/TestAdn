import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormControl } from '@angular/forms';
import { AdnApiRestServiceService } from 'src/app/services/adn-api-rest-service.service';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'formMatrix',
  templateUrl: './form-matrix.component.html',
  styleUrls: ['./form-matrix.component.scss']
})
export class FormMatrixComponent implements OnInit {
  matrixSize = new FormControl('');

  constructor(private router: Router, private adnApiRestService: AdnApiRestServiceService) { 
  }

  ngOnInit(): void {
    if(this.adnApiRestService.getUserName().length == 0){
        this.router.navigate(['/login']);
    }
  }

  createMatrix(){
    if(this.matrixSize.value >= 4 && this.matrixSize.value <= 8){
      this.router.navigate(['/matrix', this.matrixSize.value]);
    }else{
      alert("El tamaño de la matrix debe ser mayor a 3");
    }
  }

  logout(){
    this.adnApiRestService.logoutUser();
    this.router.navigate(['/login']);
  }

}
