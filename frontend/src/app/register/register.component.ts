import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { forbiddenNameValidator } from '../shared/user-name.validator';
import { PasswordValidator } from '../shared/password.validator';
import { RegistrationService } from '../registration.service';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {

  emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  showSucessMessage: boolean;
  serverErrorMessages: string;
  registrationForm: FormGroup;
  get username(){
    return this.registrationForm.get('username');
  }

  get password(){
    return this.registrationForm.get('password');
  }

  get email(){
    return this.registrationForm.get('email');
  }

  constructor(private fb: FormBuilder, private _registrationService: RegistrationService, private userService: UserService) { }


  // registrationForm = new FormGroup({
  //   username: new FormControl('Tuan'),
  //   password: new FormControl(''),
  //   confirmPassword: new FormControl(''),
  //   email: new FormControl(''),
  // });



  ngOnInit(): void {

  this.registrationForm= this.fb.group({
    username: ['Tuan', [Validators.required, forbiddenNameValidator(/admin/)]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    confirmPassword: [''],
    email: [''],
  }, {validator: PasswordValidator})
  }

  onSubmit(){
    console.log(this.userService.selectedUser);
    this.userService.postUser(this.registrationForm.value).subscribe(
      res => {
         this.showSucessMessage=true;
         this.resetForm();
        setTimeout(() => this.showSucessMessage = false, 4000);
        },
      err => {
        if (err.status === 422){
          this.serverErrorMessages=err.error.join('<br/>');

        } else {
          this.serverErrorMessages="Something went wrong. Please contact admin";

        }
      }
    );
      console.log(this.registrationForm.value);
    };

  resetForm(){
    this.registrationForm.reset();
  }
}
    // console.log("KADAMBA");

    // event.preventDefault()
    // const username=this.registrationForm.get('username')
    // const password=this.registrationForm.get('password')
    // const result = await fetch('/api/register',{
    //   method:'POST',
    //   headers:{
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify({
    //     username,
    //     password
    //   })
    // }).then((res)=>res.json())
    // console.log(result);
    // console.log("KADAMBA");

    // this._registrationService.register(this.registrationForm.value)
    // .subscribe(
    //     response => console.log("Success!", response),
    //     error => console.error('Error!', error)
    // )


