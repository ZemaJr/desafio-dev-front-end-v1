import { Component, OnInit } from '@angular/core';

import { AppComponent } from 'src/app/app.component';
import { LoginService } from '../login/login.service';
import { User, UserService } from './user.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss'],
})
export class UsuariosComponent implements OnInit {
  longText = `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog
  from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was
  originally bred for hunting.`;

  users: User[] = [];

  constructor(
    private userService: UserService,
    private loginService: LoginService,
    private appComponent: AppComponent
  ) {}

  ngOnInit(): void {
    this.loginService.ngOnInit();
    this.appComponent.ngOnInit();
    this.carregaUsuarios(1);
  }

  carregaUsuarios(nroDaPagina: number): void {
    this.userService.fetchUsers(nroDaPagina).subscribe((respostaLogin) => {
      this.users = respostaLogin.data;
    });
  }
}
