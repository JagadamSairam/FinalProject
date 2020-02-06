import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Companies} from '../../modals/addcompany-mock';
import { Observable } from 'rxjs';
import { Company } from 'src/modals/addcompany';
@Injectable({
  providedIn: 'root'
})
export class AddcompanyService {
  httpUrl = 'http://localhost:1111/companies/';
    constructor(private httpClient : HttpClient) { }

    company = Companies;

      getAllCompanies() : Observable<Company[]>{
        return this.httpClient.get<Company[]>(this.httpUrl);
     
      }

      saveCompany(com : Company):Observable<Company>{
        return this.httpClient.post<Company>(this.httpUrl,com);
      }

}
