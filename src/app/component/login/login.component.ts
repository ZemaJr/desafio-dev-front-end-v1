import { Component, OnInit } from '@angular/core';

import { FormControl, Validators } from '@angular/forms';
import { LoginService } from './login.service';
import { Router } from '@angular/router';
import { AppComponent } from './../../app.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  passwordFormControl = new FormControl('', [Validators.required]);
  hide = true;
  token: string | undefined = undefined;
  statusLogin: string = '';
  statusBotao: string = 'Entrar';
  // loginButtonMessage: string = 'Entrar';
  // loginErrorMessage: string = '';

  constructor(
    private loginService: LoginService,
    private router: Router,
    private appComponent: AppComponent
  ) {}

  ngOnInit(): void {}

  enviar(): void {

    this.statusBotao = 'Processando...';
    this.token = undefined;

    this.loginService
      .fetchLogin(this.emailFormControl.value, this.passwordFormControl.value)
      .subscribe({
      next: (respostaLogin) => {
        if (respostaLogin.token == 'QpwL5tke4Pnpja7X4') {
          this.statusLogin = 'Logado';
          this.appComponent.setStatusLogin(this.statusLogin);
          this.router.navigate(['/home']);
        }
      },
      error: (err) => {
        this.statusLogin = 'Erro';
        this.statusBotao = 'Entrar';
        this.router.navigate(['/login']);
      }
    });

    // this.loginButtonMessage = 'Entrando...';
    // this.loginService
    // .login(this.emailFormControl.value.email, this.passwordFormControl.value.password)
    // .subscribe({
    //   next: (val) => {
    //     console.log('val', val);
    //     // this.loginService.isLoggedIn = true;
    //     this.router.navigate(['/home']);
    //   },
    //   error: (err) => {
    //     this.loginErrorMessage = 'Usuário ou Senha inválidos';
    //     this.loginButtonMessage = 'Entrar';
    //     this.router.navigate(['/login']);
    //   }
    // });

  }
  
}
