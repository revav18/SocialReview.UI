import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CustomerRegister } from './models/customerRegister.model';
import { Observable } from 'rxjs';
import { EstablishmentRegister } from '../auth/models/establishmentRegister.model';
import { environment } from 'src/environments/enviroment';
import { UserLogin } from './models/userLogin.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  public customerRegister(customer: CustomerRegister): Observable<any> {
    return this.http.post<any>(
      `${this.apiUrl}/CustomerAuth/customer-register`,
      customer
    );
  }
  public establishmentRegister(establishment: EstablishmentRegister): Observable<any> {
    return this.http.post<any>(
      `${this.apiUrl}/EstablishmentAuth/establishment-register`,
      establishment);
  }

  public userLogin(user: UserLogin): Observable<any> {
      return this.http.post(
        `${this.apiUrl}/CustomerAuth/login`,
        user);
    }

  // public getMe(): Observable<string> {
  //   return this.http.get(`${this.apiUrl}/Home/get-custname`, {responseType: 'text'});
  // }
}
