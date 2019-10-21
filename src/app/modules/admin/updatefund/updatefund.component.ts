import { Component, OnInit } from '@angular/core';
import { DonorService } from 'src/app/core/donor/donor.service';
import { FormGroup,FormBuilder,Validator, Validators } from '@angular/forms';
import { AdminService } from 'src/app/core/admin/admin.service';


@Component({
  selector: 'app-updatefund',
  templateUrl: './updatefund.component.html',
  styleUrls: ['./updatefund.component.scss']
})
export class UpdatefundComponent implements OnInit {

  fundData:any;
  isUpdateButtonClicked:boolean = false;
  updateFundForm:FormGroup;
  fundId:any;
  updateStatus:boolean=false;
  updateMessage:any;

  constructor(
    private donorService:DonorService,
    private formBuilder:FormBuilder,
    private adminService:AdminService
  ) { }

  ngOnInit() {
    this.listDonorFundRequest();
    this.updateFundForm = this.formBuilder.group({
      'requesType': ['',Validators.required],
      'amount': ['',Validators.required],
      'expiryDate':['',Validators.required],
      'description':['',Validators.required]
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

 

  listDonorFundRequest()
  {
    this.adminService.listFundDetails().subscribe( (res) => {
      console.log(res);
      this.fundData = res;
    }, (err) => {
      console.log(err);
    });
  }

  updateBtn(id:any)
  {
    // alert('Update btn works!'+'(id=>'+id+')');
    this.fundId = id;
    this.isUpdateButtonClicked = true;
  }
  showDescription(description:any)
  {
    alert(description);
  }

  updateFund(form:FormGroup)
  {
    let expiryDate = this.getDate(form.value.expiryDate);
    console.log('requestType=>'+form.value.requesType);
    console.log('amount=>'+form.value.amount);
    console.log('expiryDate=>'+expiryDate);
    console.log('description=>'+form.value.description);
    console.log('fundId=>'+this.fundId);

    let formData = {
      'id':this.fundId,
      'requestType':form.value.requesType,
      'description':form.value.description,
      'amount':form.value.amount,
      'expireDate':expiryDate
    };

    this.adminService.updateFund(formData).subscribe( (res) => {
      console.log(res);
      this.isUpdateButtonClicked = false;
      this.listDonorFundRequest();
      this.updateStatus = true;
      this.updateMessage = 'Request has been updated!';
      alert('Fund Updated!');
    }, (err) => {
      console.log(err);
      alert('Unable to update fund!');
    });
  }
}
