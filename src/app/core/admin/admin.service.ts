import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(
    private http:HttpClient
  ) { }

  apiUrl:string = 'http://localhost:9000';

    adminLogin(formData:any):any
    {
      return this.http.post(this.apiUrl+'/admin/login',formData);
    }

    listDonor():any
    {
      return this.http.get(this.apiUrl+'/admin/listDonor');
    }

    listFundedDonors():any
    {
      return this.http.get(this.apiUrl+'/admin/listFundedDonor');
    }

    raiseFund(fromData:any):any
    {
      return this.http.post(this.apiUrl+'/admin/raiseFund',fromData);
    }

}
