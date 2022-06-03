import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable, of, throwError } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
import { User } from '../models/User';
import { Matrix } from '../models/Matrix';
import { Stadistics } from '../models/Stadistics';

@Injectable({
  providedIn: 'root'
})
export class AdnApiRestServiceService {
  private urlBase: string = "http://ec2-54-226-148-188.compute-1.amazonaws.com:80/";
  
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json'})
  };

  constructor( private http: HttpClient, private cookie: CookieService) {
    console.log("Servicon Api Rest HTTP");
    this.setUser("");
   }

  loginUserApiRest(user: User):Observable<boolean>{
    return this.http.post<boolean>("http://ec2-54-226-148-188.compute-1.amazonaws.com:80/login", user, this.httpOptions).pipe(
      tap((exist: boolean) => {
        if(exist){
          this.setUser(user.username)
        }else{
          alert("El usuario no existe")
        }}), 
      catchError(this.handleError));
  }

  createUser(user: User):Observable<boolean>{
    return this.http.post<boolean>("http://ec2-54-226-148-188.compute-1.amazonaws.com:80/create/user", user, this.httpOptions).pipe(
      tap( _=>  console.log("Usuario Creado")), 
      catchError(this.handleError));
  }

  isValidMatrixAdnApiRest(matrix: Matrix, urlPrefix: string):Observable<boolean>{
      var username = '/'+this.cookie.get("username");
      return this.http.post<boolean>(this.urlBase+urlPrefix+username, matrix, this.httpOptions).pipe(
        tap((exist: boolean) => console.log('Adn es: '+exist)), 
        catchError(this.handleError));
  }
  
  getStadistic(urlPrefix: string):Observable<Stadistics>{
    return this.http.get<Stadistics>('http://ec2-54-226-148-188.compute-1.amazonaws.com:80/statistics').pipe(
        tap(_ => console.log('Estadistica obtenida')), 
            catchError(this.handleError));
  }
  
  handleError(error: HttpErrorResponse) {
    let errorMessage = 'Unknown error!';
    if (error.error instanceof ErrorEvent) {
      errorMessage = `Error: ${error.error.message}`;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage+" Por favor verifique si el servidor rest esta encendido");
    return throwError(errorMessage);
  }

  setUser(username: string){
    this.cookie.set("username", username);
  }

  getUserName():string{

    return this.cookie.get("username");
  }
  
  logoutUser(){
    this.cookie.delete("username");
  }
}
  