import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/core/admin/admin.service';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.scss']
})
export class AdminloginComponent implements OnInit {

  adminLoginForm:FormGroup;

  constructor(
    private formBuilder:FormBuilder,
    private router:Router,
    private adminService:AdminService
    ) { }

  ngOnInit() {
    this.adminLoginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  adminLogin(form:FormGroup)
  {
    console.log("email=>"+form.value.email);
    console.log("password=>"+form.value.password);

    let formData:any = {
      "email":form.value.email,
      "password":form.value.password
    };

    this.adminService.adminLogin(formData).subscribe( (res) => {
      console.log(JSON.stringify(res));
      if(res != null)
      {
        this.router.navigate(['/admin']);
        let resData = JSON.stringify(res);
        localStorage.setItem('LOGGED_IN_ADMIN',resData);
      }
    }, (err) => {
      console.log(err);
      alert("Invalid email and password!");
    });

    
  }

}
