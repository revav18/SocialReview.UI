import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CustomerRegister } from '../models/customerRegister';
import { Observable, catchError, throwError } from 'rxjs';
import { UserCredential } from '../models/userCredential';
import { EstablishmentRegister } from '../models/establishmentRegister';
import { Role } from '../models/role';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  public customerRegister(customer: CustomerRegister): Observable<any> {
    return this.http.post<any>(
      'https://localhost:7180/api/CustomerAuth/customer-register',
      customer
    );
  }
  public establishmentRegister(establishment: EstablishmentRegister): Observable<any> {
    return this.http.post<any>(
      'https://localhost:7180/api/EstablishmentAuth/establishment-register',
      establishment);
  }

  public userLogin(user: UserCredential, role: Role): Observable<string> {
    if (role === Role.Customer) {
      return this.http.post(
        'https://localhost:7180/api/CustomerAuth/customer-login',
        user,
        { responseType: 'text' });
    }
    else {
      return this.http.post(
        'https://localhost:7180/api/EstablishmentAuth/establishment-login',
        user,
        { responseType: 'text' });
    }
  }

  public getMe(): Observable<string> {
    return this.http.get<string>('https://localhost:7180/api/Home/get-custname');
  }
}
