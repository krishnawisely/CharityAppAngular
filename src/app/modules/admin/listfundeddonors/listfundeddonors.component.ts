import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/core/admin/admin.service';


@Component({
  selector: 'app-listfundeddonors',
  templateUrl: './listfundeddonors.component.html',
  styleUrls: ['./listfundeddonors.component.scss']
})
export class ListfundeddonorsComponent implements OnInit {

  listFundedDonor:any;

  constructor(
    private adminService:AdminService
  ) { }

  ngOnInit() {
    this.listFundedDonors();
  }

  listFundedDonors()
  {
    this.adminService.listFundedDonors().subscribe( (res)=> {
      
      this.listFundedDonor = res;
      console.log(res);
      // var tableList = document.getElementById('donorList');
      // var content = '';
      // for(let resData of res)
      // {
      //   content += '<tr><td>';
      //   content += resData.donor.name+'</td>';
      //   content += '<td>'+resData.donor.email+'</td>';
      //   content += '<td>'+resData.fundRequest.requestType+'</td>';
      //   content += '<td>'+resData.amount+'</td>';
      //   content += '<td>'+resData.date+'</td></tr>';
       
      // }

      // tableList.innerHTML = content;
    });
  }

}
