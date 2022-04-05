import { TestBed } from '@angular/core/testing';

import { FakeApiResponse, UserService } from './user.service';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';

describe('UserService', () => {
  let service: UserService;
  let mockHttpClient: jasmine.SpyObj<HttpClient>;

  beforeEach(() => {
    mockHttpClient = jasmine.createSpyObj('mockHttpClient', ['get']);

    TestBed.configureTestingModule({
      providers: [{ provide: HttpClient, useValue: mockHttpClient }],
    });
    service = TestBed.inject(UserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('#fetchUsers', () => {
    it('should call correct endpoint', () => {
      // When
      service.fetchUsers(1);

      // then
      expect(mockHttpClient.get).toHaveBeenCalledWith(
        'https://reqres.in/api/users?page=1'
      );
    });

    it('should return observable of list of users from api', () => {
      // Given
      mockHttpClient.get.and.returnValue(of(FakeApiResponse));

      // When
      service.fetchUsers(1).subscribe((users) => {
        // then
        expect(users).toEqual(FakeApiResponse);
      });
    });
  });
});
