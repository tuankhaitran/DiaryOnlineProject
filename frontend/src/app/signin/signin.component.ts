import {Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],

})

export class SigninComponent implements OnInit {
  loginForm: FormGroup;
  serverErrorMessages: string;

  get email(){
    return this.loginForm.get('email');
  }
  get password(){
    return this.loginForm.get('password');
  }
  constructor(private fb: FormBuilder, private Auth: AuthService, private userService: UserService, private router: Router) {
   }

  ngOnInit(): void {
    this.loginForm=this.fb.group({
      email:[''],
      password:['']
    })
    if (this.userService.isLoggedIn()){
      this.router.navigateByUrl('/userprofile');
    }
  }
  loginUser(event:any){
    event.preventDefault();
    const target = event.target;
    const email=target.querySelector('#email').value;
    const password=target.querySelector('#password').value;
    // this.Auth.getUserDetails(username,password).subscribe(data=>{
    //   if(data.success){

    //   }else{
    //     window.alert(data.message)
    //   }
    // });

    console.log(email,password);
  }
  onSubmit(){
    this.userService.login(this.loginForm.value).subscribe(
      (res: any) => {
        this.userService.setToken(res['token']);
        this.router.navigateByUrl('/userprofile');
      },
      err => {
        this.serverErrorMessages= err.error.message;

      }
    )

  }

}
