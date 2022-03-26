import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

import { SomaComponent } from './soma.component';

describe('SomaComponent', () => {
  let component: SomaComponent;
  let fixture: ComponentFixture<SomaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SomaComponent],
      imports: [
        FormsModule,
        BrowserAnimationsModule,
        MatInputModule,
        MatFormFieldModule,
        MatButtonModule,
        MatButtonToggleModule,
        MatSlideToggleModule,
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SomaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('#somar', () => {
    it('Soma nro1 com nro2...', () => {
      // Given
      component.nro1 = 13;
      component.nro2 = 14;

      // When
      component.somar();

      // Then
      expect(component.resultado).toEqual('Resultado: 27');
    });

    it('Avisa números inválidos...', () => {
      // Given
      component.nro1 = undefined;
      // component.nro2 = undefined;

      // When
      component.somar();

      // Then
      expect(component.resultado).toEqual('Entre com números válidos!');
    });
  });

  describe('#limpar', () => {
    it('Limpa os campos de entrada e reinicia...', () => {
      // Given
      component.nro1 = undefined;
      component.nro2 = undefined;

      // When
      component.limpar();

      // Then
      expect(component.resultado).toEqual('Resultado:');
      expect(component.nro1).toEqual(undefined);
      expect(component.nro2).toEqual(undefined);
    });
  });
});
