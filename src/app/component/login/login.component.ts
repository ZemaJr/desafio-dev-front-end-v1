import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  passwordFormControl = new FormControl('', [Validators.required]);
  hide = true;
  token: string | undefined = undefined;

  constructor(private loginService: LoginService) { }

  ngOnInit(): void { }

  enviar() {
    this.token = undefined;
    this.loginService.setLogin(this.emailFormControl.value, this.passwordFormControl.value);
    this.loginService.fetchLogin().subscribe((respostaLogin) => 
    this.token = respostaLogin.token);
  }

}
