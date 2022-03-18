import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss'],
})
export class UsuariosComponent implements OnInit {
  longText = `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog
  from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was
  originally bred for hunting.`;

  users: any[] | undefined;

  constructor(private userService: UserService) { }

  ngOnInit(): void { this.carregaUsuarios(1); }

  carregaUsuarios(nroDaPagina: number): void {
    this.userService.fetchUsers(nroDaPagina).subscribe((respostaLogin) => {
      this.users = respostaLogin.data;
    });
  }

}
