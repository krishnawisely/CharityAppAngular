import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AdminService } from 'src/app/core/admin/admin.service';

@Component({
  selector: 'app-raisefund',
  templateUrl: './raisefund.component.html',
  styleUrls: ['./raisefund.component.scss']
})
export class RaisefundComponent implements OnInit {
  raiseFundForm:FormGroup;
  constructor(
    private formBuilder:FormBuilder,
    private adminService:AdminService
  ) { }

  ngOnInit() {
    this.raiseFundForm = this.formBuilder.group({
      requesType: ['', Validators.required],
      amount: ['', Validators.required],
      expiryDate: ['', Validators.required],
      description: ['', Validators.required]
    });
  }

  getDate(dateObj){
    let month = dateObj.getMonth();
    let mon = month >= 9 ? month +1 : "0" + (month+1);
    let date = dateObj.getDate();
    let day = date >  10 ? date : "0" + date;
    let dob = dateObj.getFullYear()+'-'+mon+'-'+day;
    return dob;
  }

  raiseFund(form:FormGroup)
  {
    console.log('Request Type=>'+form.value.requesType);
    console.log('Amount=>'+form.value.amount);
    console.log('Expiry Date=>'+form.value.expiryDate);
    console.log('Description=>'+form.value.description);
    
    let dateObj = new Date(form.value.expiryDate);

    let fundExpiryDate = this.getDate(dateObj);

    console.log(fundExpiryDate);

    let localData = localStorage.getItem('LOGGED_IN_ADMIN');

    let adminData = JSON.parse(localData);
    console.log('admin=>'+adminData.id);

    let formData:any = {
      'adminId':adminData.id,
      'amount':form.value.amount,
      'expiryDate':fundExpiryDate,
      'description':form.value.description,
      'requestType':form.value.requesType
    };

    this.adminService.raiseFund(formData).subscribe( (res) => {
      console.log(res);
    });

  }
 
}
