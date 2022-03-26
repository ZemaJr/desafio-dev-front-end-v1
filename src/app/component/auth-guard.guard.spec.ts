import { TestBed } from '@angular/core/testing';

import { AuthGuard } from './auth-guard.guard';
import { LoginComponent } from './login/login.component';
import { AppComponent } from 'src/app/app.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('AuthGuardGuard', () => {
  let guard: AuthGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoginComponent, AppComponent],
      imports: [RouterTestingModule, HttpClientTestingModule],
    });
    guard = TestBed.inject(AuthGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
