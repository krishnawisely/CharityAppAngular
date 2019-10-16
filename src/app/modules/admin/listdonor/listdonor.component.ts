import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/core/admin/admin.service';


@Component({
  selector: 'app-listdonor',
  templateUrl: './listdonor.component.html',
  styleUrls: ['./listdonor.component.scss']
})
export class ListdonorComponent implements OnInit {

  constructor(private adminService:AdminService) { }

  ngOnInit() {
    this.listDonor();
  }

  listDonor()
  {
    this.adminService.listDonor().subscribe( (res) => {
      console.log(res);
      var tableList = document.getElementById('donorList');
      var content = '';
      for(let resData of res)
      {
        content += '<tr><td>';
        content += resData.name+'</td>';
        content += '<td>'+resData.email+'</td>';
        content += '<td>'+resData.dateOfBirth+'</td>';
        content += '<td>'+resData.gender+'</td></tr>';
      }

      tableList.innerHTML = content;
    });
  }


}
