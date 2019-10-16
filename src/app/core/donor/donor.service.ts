import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DonorService {

  constructor(
    private http:HttpClient
  ) { }

  apiUrl:string = 'http://localhost:9000';

  listFundRequest():any
  {
    return this.http.get(this.apiUrl+'/donor/listFundRequest');
  }
  donorLogin(formData:any):any
  {
    return this.http.post(this.apiUrl+'/donor/login',formData);
  }
  donorRegister(formData:any):any
  {
    return this.http.post(this.apiUrl+'/donor/register',formData);
  }
}
