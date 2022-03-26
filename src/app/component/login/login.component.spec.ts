import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AppComponent } from 'src/app/app.component';
import { RecaptchaModule } from 'ng-recaptcha';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginService } from './login.service';
import { of } from 'rxjs';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let mockLoginService: jasmine.SpyObj<LoginService>;

  beforeEach(async () => {
    mockLoginService = jasmine.createSpyObj('mockLoginService', ['login']);
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
        { provide: AppComponent },
        { provide: LoginService, useValue: mockLoginService },
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

  fdescribe('#enviar', () => {
    describe('when form is valid', () => {

      it('should update login button message', () => {
        // Given
        mockLoginService.login.and.returnValue(of('token'));
        component.captcha = 'checked';
        component.textoBotao = 'Entrar';

        // When
        component.enviar();

        // Then
        expect(component.textoBotao).toEqual('Conectando...');
      });

      it('should call LoginService.login', () => {
        // Given
        
        // When
        
        // Then
        
      });

    });
  });
});
