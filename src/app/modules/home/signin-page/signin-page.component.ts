import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DonorService } from 'src/app/core/donor/donor.service';

@Component({
  selector: 'app-signin-page',
  templateUrl: './signin-page.component.html',
  styleUrls: ['./signin-page.component.scss']
})
export class SigninPageComponent implements OnInit {

  donorLoginForm:FormGroup;

  constructor(
    private formBuilder:FormBuilder,
    private router:Router,
    private donorService:DonorService
    ) { }

  ngOnInit() {
    this.donorLoginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  donorLogin(form:FormGroup)
  {
      console.log("email=>"+form.value.email);
      console.log("password=>"+form.value.password);

      let formData:any = {
        "email":form.value.email,
        "password":form.value.password
      };

      this.donorService.donorLogin(formData).subscribe( (res) => {
        console.log(res);
        let resData = JSON.stringify(res);
        if( res != null )
        {
          this.router.navigate(['donor']);
          localStorage.setItem('LOGGED_IN_DONOR',resData);
        }
      }, (err) => {
        console.log(err);
        alert('Invalid email and password!');
      });

      
  }

}
