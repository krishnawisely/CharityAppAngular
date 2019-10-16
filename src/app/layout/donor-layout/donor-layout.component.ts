import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-donor-layout',
  templateUrl: './donor-layout.component.html',
  styleUrls: ['./donor-layout.component.scss']
})
export class DonorLayoutComponent implements OnInit {

  constructor(
    private router:Router
  ) { }

  ngOnInit() {
  }

  logout()
  {
    localStorage.clear();
    this.router.navigate(['../home/signin']);
  }

}
