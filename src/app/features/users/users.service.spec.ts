import { TestBed } from '@angular/core/testing';

import { fakeApiResponse, UsersService } from './users.service';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';

fdescribe('UsersService', () => {
  let service: UsersService;
  let mockHttpClient: jasmine.SpyObj<HttpClient>;

  beforeEach(() => {
    mockHttpClient = jasmine.createSpyObj('mockHttpClient', ['get']);

    TestBed.configureTestingModule({
      providers: [{provide: HttpClient, useValue: mockHttpClient}],
    });
    service = TestBed.inject(UsersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('#loadUsers', () => {
    it('should call correct endpoint', () => {
      // When
      service.loadUsers();

      // then
      expect(mockHttpClient.get).toHaveBeenCalledWith('https://reqres.in/api/users');
    });

    it('should return observable of list of users from api', () => {
      // Given
      mockHttpClient.get.and.returnValue(of(fakeApiResponse));

      // When
      service.loadUsers().subscribe((users) => {
        // then
        expect(users).toEqual(fakeApiResponse);
      });
    });

  });

});
