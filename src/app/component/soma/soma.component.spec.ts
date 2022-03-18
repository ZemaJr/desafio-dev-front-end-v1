import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RecaptchaModule } from 'ng-recaptcha';

import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDialogModule } from '@angular/material/dialog';

import { SomaComponent } from './soma.component';
import { AppModule } from 'src/app/app.module';

fdescribe('SomaComponent', () => {
  let component: SomaComponent;
  let fixture: ComponentFixture<SomaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SomaComponent],
      imports: [
        AppModule,
        BrowserModule,
        FormsModule,
        // AppRoutingModule,
        BrowserAnimationsModule,
        HttpClientModule,
        MatInputModule,
        MatFormFieldModule,
        MatButtonModule,
        MatButtonToggleModule,
        MatSlideToggleModule,
        MatCardModule,
        MatGridListModule,
        MatToolbarModule,
        MatIconModule,
        MatMenuModule,
        MatDialogModule,
        ReactiveFormsModule,
        RecaptchaModule,
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

  xdescribe('#limpar', () => {

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
