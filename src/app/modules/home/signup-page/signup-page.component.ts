import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validator, Validators } from '@angular/forms';
import { DonorService } from 'src/app/core/donor/donor.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.scss']
})
export class SignupPageComponent implements OnInit {

  donorRegisterForm:FormGroup;

  constructor(
    private formBuilder:FormBuilder,
    private donorService:DonorService,
    private router:Router
    ) { }

    /** RegExp **/ 
    userNameRegex = "^[a-zA-Z]{5,15}$";
    // emailRegex = "\S+@\S+\.\S+";
    passwordRegex = "^[a-zA-Z0-9]{6,15}$";

  ngOnInit() {
    this.donorRegisterForm = this.formBuilder.group({
      username: ['', [Validators.required,Validators.pattern(this.userNameRegex)]],
      email: ['', [Validators.required,Validators.email]],
      password: ['', [Validators.required,Validators.pattern(this.passwordRegex)]],
      dateOfBirth: ['', [Validators.required]],
      gender: ['', Validators.required]
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

  donorRegister(form:FormGroup)
  {
    console.log("username=>"+form.value.username);
    console.log("email=>"+form.value.email);
    console.log("password=>"+form.value.password);
    console.log("dob=>"+form.value.dateOfBirth);
    console.log("gender=>"+form.value.gender);

    let dateOfBirth = form.value.dateOfBirth;

    let dateObj = new Date(dateOfBirth);
    let dob= this.getDate(dateObj);
    console.log(dob);

    let formData = {
      'name':form.value.username,
      'email':form.value.email,
      'password':form.value.password,
      'dob':dob,
      'gender':form.value.gender
    };

    this.donorService.donorRegister(formData).subscribe( (res) => {
      console.log(res);
      alert('Register success!');
      // this.router.navigate(['./signin']);
    }, (err) => {
      console.log(err);
      alert('Unable to register!');
    });

  }

}
