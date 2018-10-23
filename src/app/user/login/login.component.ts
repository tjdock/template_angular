import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {REG_MOBILE} from '../../shared/utils';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private router: Router) {
  }

  ngOnInit() {
    this.loginForm = new FormGroup({
      mobile: new FormControl('', [Validators.required, Validators.pattern(REG_MOBILE)]),
      password: new FormControl('', [Validators.required])
    });

  }

  onSubmit() {
    console.log(this.loginForm.value.mobile);
  }

  findPdw() {
    this.router.navigate(['/user/find-password']);
  }
}
