import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { LoginDetails } from '../modals/logindetails';


@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  httpUrl='http://localhost:3000/users/';
  users=LoginDetails;
  constructor(private httpClient : HttpClient) { }
  getAllUsers() : Observable<LoginDetails[]>{
    return this.httpClient.get<LoginDetails[]>(this.httpUrl);
  }
  saveUser(user : LoginDetails):Observable<LoginDetails>{
    return this.httpClient.post<LoginDetails>(this.httpUrl,user);

  }
  deleteUser(id : number):Observable<LoginDetails> {
    return this.httpClient.delete<LoginDetails>(this.httpUrl + id)

  }
}
