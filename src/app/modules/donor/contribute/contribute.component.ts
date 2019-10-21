import { Component, OnInit } from '@angular/core';
import { DonorService } from 'src/app/core/donor/donor.service';

@Component({
  selector: 'app-contribute',
  templateUrl: './contribute.component.html',
  styleUrls: ['./contribute.component.scss']
})
export class ContributeComponent implements OnInit {

  tableData:any;

  amount:any;

  isContributeButtonClicked:boolean = false;

  donorData:any;
  fundRequestId:any;

  constructor(
    private donorService:DonorService
  ) { }

  ngOnInit() {
    this.listRequest();
  }

  listRequest()
  {
    this.donorService.listFundRequest().subscribe((res) => {
      console.log(res);
      this.tableData = res;
    });
  }

  showDescription(description:any)
  {
    console.log(description);
    alert(description);
  }

  contributeBtn(id:any)
  {
    console.log('id=>'+id);
    // alert('id=>'+id);
    this.fundRequestId = id;
    this.isContributeButtonClicked = true;
  }

  contributeFund()
  {
    this.donorData = localStorage.getItem('LOGGED_IN_DONOR');
    let donor = JSON.parse(this.donorData);
    let donorId = donor.id;
    console.log('id=>'+this.fundRequestId+'donorId=>'+donorId+'amount=>'+this.amount);
    let formData = {
      'donarId':donorId,
      'fundrequestId':this.fundRequestId,
      'fundAmount':this.amount
    };
    this.donorService.contributeFund(formData).subscribe((res) =>{
      console.log(res);
      alert('Contribute success!');
    }, (err) => {
      alert('Unable to contribute!');
    });
  }

  back()
  {
    this.isContributeButtonClicked = false;
  }
}
