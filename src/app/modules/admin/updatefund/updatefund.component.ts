import { Component, OnInit } from '@angular/core';
import { DonorService } from 'src/app/core/donor/donor.service';


@Component({
  selector: 'app-updatefund',
  templateUrl: './updatefund.component.html',
  styleUrls: ['./updatefund.component.scss']
})
export class UpdatefundComponent implements OnInit {

  constructor(
    private donorService:DonorService
  ) { }

  ngOnInit() {
    this.listDonorFundRequest();
  }

  listDonorFundRequest()
  {
    this.donorService.listFundRequest().subscribe( (res) => {
      console.log(res);
      var tableList = document.getElementById('listRequest');
      var content = '';
      for(let resData of res)
      {
        content += '<tr><td>';
        content += resData.requestType+'</td>';
        content += '<td>'+resData.amount+'</td>';
        content += '<td>'+resData.expireDate+'</td>';
        content += '<td><button class="btn btn-outline-danger">Update</button>';
        content += '<button class="btn btn-outline-info">Details</button></td>';
        content += '</tr>';
      }
      tableList.innerHTML = content;
    }, (err) => {
      console.log(err);
    });
  }
}
