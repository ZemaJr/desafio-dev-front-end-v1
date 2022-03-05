import { Component } from '@angular/core';
import { ThemePalette } from '@angular/material/core';

@Component({
  selector: 'app-soma',
  templateUrl: './soma.component.html',
  styleUrls: ['./soma.component.scss'],
})
export class SomaComponent {
  nro1: number | undefined;
  nro2: number | undefined;
  resultado: any = 'Resultado:';
  color: ThemePalette = 'accent';
  checked = true;
  disabled = false;
  ligado: string = 'Claro';
  erro: boolean = false;

  tema() {
    this.ligado = this.ligado == 'Claro' ? 'Escuro' : 'Claro';
  }

  somar(): void {
    if (this.nro1 == undefined || this.nro2 == undefined) {
      this.resultado = 'Entre com números válidos!';
      return;
    }
    this.resultado = this.nro1 + this.nro2;
    this.resultado = 'Resultado: ' + this.resultado;
  }

  limpar(): void {
    this.nro1 = undefined;
    this.nro2 = undefined;
    this.resultado = 'Resultado:';
  }
}
