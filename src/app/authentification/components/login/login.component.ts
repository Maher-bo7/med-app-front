import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  returnUrl: string;
  submitted = false;
  email:FormControl;
  password:FormControl;

  constructor(
    private _formBuilder: FormBuilder,
    private authenticationService : AuthService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.loginForm = this._formBuilder.group({
      email : new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required])
  });
  }


  onSubmit() {
    console.log("login:::",this.loginForm.value)
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';

    // stop here if form is invalid
    if (this.loginForm.invalid) {
        return;
    }
  }
  getErrorMessage(){
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }


}





