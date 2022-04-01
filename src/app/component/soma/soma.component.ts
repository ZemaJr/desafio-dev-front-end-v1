import { Component, OnInit } from '@angular/core';

import { ThemePalette } from '@angular/material/core';
import { AppComponent } from 'src/app/app.component';
import { LoginService } from '../login/login.service';

@Component({
  selector: 'app-soma',
  templateUrl: './soma.component.html',
  styleUrls: ['./soma.component.scss'],
})
  export class SomaComponent implements OnInit {
  nro1: number | undefined;
  nro2: number | undefined;
  resultado: string = 'Resultado:';
  color: ThemePalette = 'accent';
  checked = true;
  disabled = false;
  ligado: string = 'Claro';
  erro: boolean = false;

  constructor(
    private loginService: LoginService,
    private appComponent: AppComponent
  ) { }
  
  ngOnInit(): void {
    this.loginService.ngOnInit();
    this.appComponent.ngOnInit();
  }

  tema() {
    this.ligado = this.ligado == 'Claro' ? 'Escuro' : 'Claro';
  }

  somar(): void {
    if (this.nro1 == undefined || this.nro2 == undefined) {
      this.resultado = 'Entre com números válidos!';
      return;
    }
    const soma = this.nro1 + this.nro2;
    this.resultado = 'Resultado: ' + soma;
  }

  limpar(): void {
    this.nro1 = undefined;
    this.nro2 = undefined;
    this.resultado = 'Resultado:';
  }
}
