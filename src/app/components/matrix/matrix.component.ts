import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Matrix } from 'src/app/models/Matrix';
import { User } from 'src/app/models/User';
import { AdnApiRestServiceService } from 'src/app/services/adn-api-rest-service.service';

@Component({
  selector: 'matrix',
  templateUrl: './matrix.component.html',
  styleUrls: ['./matrix.component.scss']
})
export class MatrixComponent  implements OnInit{
   matrixSize: number = 0;
   valuesInputs:any [] = [];
   adnValid = 0;
   adnInvalid = 0;
   ratio = 0;
 
 

  constructor(
    private adnApiRestService: AdnApiRestServiceService,
    private router: Router,
    private route: ActivatedRoute,
    ) {}

  ngOnInit(): void {
    if(this.adnApiRestService.getUserName().length == 0){
      this.router.navigate(['/login']);
    }
    this.route.paramMap.subscribe(params => {this.matrixSize = Number(params.get('size'));});
    this.showStadistics();
    this.initArrayInput();
  }

  initArrayInput(){
    for(var column = 0; column < this.matrixSize; column++ ){  
        this.valuesInputs.push(new Array(this.matrixSize));
    }
  }

  saveValuesMatrix(i: number, j:number, event:any){
    this.valuesInputs[i][j]= event.target.value;
  }
  
  fillMatrixValues(){
    for(var column = 0; column < this.matrixSize; column++){
      for(var row = 0; row < this.matrixSize; row++){
          this.valuesInputs[column][row] = (<HTMLInputElement>document.getElementById('input'+column+row)).value;
      }
    }
  }

  validMatrix = function(matrixSize: number, valuesInputs:any []){
    var countValues = 0;
    for(var column = 0; column < matrixSize; column++){
      for(var row = 0; row < matrixSize; row++){
          if (valuesInputs[column][row] != '' && (valuesInputs[column][row] == 'A' || valuesInputs[column][row] == 'C' || valuesInputs[column][row] == 'T' || valuesInputs[column][row] == 'G')){
            countValues++;
          }
      }
    }
    return countValues == matrixSize*matrixSize;
  }

  
  sentToApiRest(){
    this.fillMatrixValues();
    var isValidMatrix = this.validMatrix(this.matrixSize, this.valuesInputs)
    var isValidAdn;
    if(isValidMatrix){ 
      this.adnApiRestService.isValidMatrixAdnApiRest(new Matrix(this.valuesInputs),"validMatrix").subscribe(validAdn => {
        if(validAdn){
          alert("El Adn ingresado es: Valido");
        }else{
          alert("El Adn ingresado es: Invalido");
        }
      });
      this.showStadistics();
    }else{
      alert("Por favor ingrese todos los valores en la matrix, solo se permiten un valor de A,C,T,G");
    }
  }
    
  showStadistics(){
    var stadistics = this.adnApiRestService.getStadistic("statistics").subscribe(stadistics => {
          this.adnValid = stadistics.count_correct_dna;
          this.adnInvalid = stadistics.count_defect_dna;
          this.ratio = stadistics.ratio;

        });
    var pepe = "";
  }

  logout(){
    this.adnApiRestService.logoutUser();
    this.router.navigate(['/login']);
  }
}
