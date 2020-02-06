import { Injectable } from '@angular/core';
import {USERS} from '../../modals/user-mock'
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from 'src/modals/user';
@Injectable({
  providedIn: 'root'
})
export class ServiceService {
httpUrl = 'http://localhost:2222/users/';

users = USERS;
  constructor(private httpClient : HttpClient) { }

 getAllUsers() : Observable<User[]>{
   return this.httpClient.get<User[]>(this.httpUrl);

 }
  saveUser(user : User):Observable<User>{
    return this.httpClient.post<User>(this.httpUrl,user);

  }
   deleteUser(id : number):Observable<User> {
    return this.httpClient.delete<User>(this.httpUrl + id)
      }
      update(user : User) :Observable<User>{
        return this.httpClient.put<User>(this.httpUrl+user.id,user);
      }
      getUserById(id:number) : Observable<User>{
        return this.httpClient.get<User>(this.httpUrl+id);
      }
      isAdmin() : boolean{
        return true;
      }
}
