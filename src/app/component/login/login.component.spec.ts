import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RecaptchaModule } from 'ng-recaptcha';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginService } from './login.service';
import { of, throwError } from 'rxjs';
import { Router } from '@angular/router';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let mockLoginService: jasmine.SpyObj<LoginService>;
  let mockRouter: jasmine.SpyObj<Router>;

  beforeEach(async () => {
    mockLoginService = jasmine.createSpyObj('mockLoginService', [
      'login',
      'setStatusLogin',
    ]);
    mockRouter = jasmine.createSpyObj('mockRouter', ['navigate']);
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterTestingModule,
        RecaptchaModule,
        MatIconModule,
        MatInputModule,
        NoopAnimationsModule,
        ReactiveFormsModule,
      ],
      providers: [
        { provide: LoginService, useValue: mockLoginService },
        { provide: Router, useValue: mockRouter },
      ],
      declarations: [LoginComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('#enviar', () => {
    describe('when form is valid', () => {
      describe('given login is successful', () => {
        beforeEach(() => {
          // Given
          component.emailFormControl.setValue('teste@teste.com.br');
          component.passwordFormControl.setValue('123456');
          component.captcha = 'checked';
          component.textoBotao = 'Entrar';
          mockLoginService.login.and.returnValue(of('fakeToken'));
          component.statusLogin = '';
        });

        it('should update login button message', () => {
          // When
          component.enviar();

          // Then
          expect(component.statusLogin).toEqual('Logado');
          expect(component.textoBotao).toEqual('Conectando...');
        });

        it('should call LoginService.login with input e-mail and password from form', () => {
          // When
          component.enviar();

          // Then
          expect(mockLoginService.login).toHaveBeenCalledWith(
            'teste@teste.com.br',
            '123456'
          );
        });

        it('should call component.statusLogin', () => {
          // When
          component.enviar();

          // Then
          expect(component.statusLogin).toEqual('Logado');
        });

        it('should call loginService.setStatusLogin with input Logado', () => {
          // When
          component.enviar();

          // Then
          expect(mockLoginService.setStatusLogin).toHaveBeenCalledWith(
            'Logado'
          );
        });

        it('should router.navigate to home', () => {
          // When
          component.enviar();

          // Then
          expect(mockRouter.navigate).toHaveBeenCalledWith(['/home']);
        });
      });

      describe('given login fails', () => {
        beforeEach(() => {
          // Given
          component.captcha = 'checked';
          component.statusLogin = '';
          component.textoBotao = 'Conectando...';
          mockLoginService.login.and.returnValue(
            throwError(() => new Error('test'))
          );
        });

        it('should update statusLogin message', () => {
          // When
          component.enviar();

          // Then
          expect(component.statusLogin).toEqual('Erro');
          expect(component.textoBotao).toEqual('Entrar');
          expect(mockRouter.navigate).toHaveBeenCalledWith(['/login']);
        });
      });
    });
  });
});
