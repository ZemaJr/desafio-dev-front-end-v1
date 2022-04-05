import { TestBed } from '@angular/core/testing';

import { LoginService } from './login.service';
import { HttpClient } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';

describe('LoginService', () => {
  let service: LoginService;
  let mockHttpClient: jasmine.SpyObj<HttpClient>;

  beforeEach(() => {
    mockHttpClient = jasmine.createSpyObj('mockHttpClient', ['post']);
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      providers: [
        { provide: HttpClient, useValue: mockHttpClient },
      ],
    });
    service = TestBed.inject(LoginService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('#login', () => {
    it('should call correct endpoint with correct body', () => {
      // Given

      // When
      service.login('test@test.com', '1234');

      // Then
      expect(mockHttpClient.post).toHaveBeenCalledWith(
        'https://reqres.in/api/login',
        { email: 'test@test.com', password: '1234' }
      );
    });
  });
});
