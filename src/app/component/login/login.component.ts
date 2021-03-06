import { Component } from '@angular/core';

import { FormControl, Validators } from '@angular/forms';
import { LoginService } from './login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  siteKey: string = '6LfWp9AeAAAAAEEmzdE7HE6UNYnPqq11ApIHh99c';
  captcha: string | undefined = undefined;
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  passwordFormControl = new FormControl('', [Validators.required]);
  hide = true;
  statusLogin: string = '';
  textoBotao: string = 'Entrar';
  statusBotao: string = 'true';

  constructor(private loginService: LoginService, private router: Router) {
    this.captcha = undefined;
  }

  resolved(captchaResponse: string) {
    this.statusBotao = 'true';
    this.captcha = captchaResponse;
    if (this.captcha != '') {
      this.statusBotao = 'false';
    }
  }

  enviar(): void {
    if (this.captcha == undefined || this.captcha == '') {
      this.captcha = '';
      return;
    } // else {
    this.statusLogin = '';
    this.textoBotao = 'Conectando...';

    this.loginService
      .login(this.emailFormControl.value, this.passwordFormControl.value)
      .subscribe({
        next: (respostaLogin) => {
          // if (respostaLogin.token == 'QpwL5tke4Pnpja7X4') {
          this.statusLogin = 'Logado';
          this.loginService.setStatusLogin(this.statusLogin);
          this.router.navigate(['/home']);
          // }
        },
        error: (err) => {
          this.statusLogin = 'Erro';
          this.textoBotao = 'Entrar';
          this.router.navigate(['/login']);
        },
      });
    // }
  }

  autenticado(): string {
    return this.statusLogin;
  }
}
