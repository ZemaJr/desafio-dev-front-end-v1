import { TestBed } from '@angular/core/testing';

import { UsersService } from './users.service';
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
      const fakeApiResponse = {"page":1,"per_page":6,"total":12,"total_pages":2,"data":[{"id":1,"email":"george.bluth@reqres.in","first_name":"George","last_name":"Bluth","avatar":"https://reqres.in/img/faces/1-image.jpg"},{"id":2,"email":"janet.weaver@reqres.in","first_name":"Janet","last_name":"Weaver","avatar":"https://reqres.in/img/faces/2-image.jpg"},{"id":3,"email":"emma.wong@reqres.in","first_name":"Emma","last_name":"Wong","avatar":"https://reqres.in/img/faces/3-image.jpg"},{"id":4,"email":"eve.holt@reqres.in","first_name":"Eve","last_name":"Holt","avatar":"https://reqres.in/img/faces/4-image.jpg"},{"id":5,"email":"charles.morris@reqres.in","first_name":"Charles","last_name":"Morris","avatar":"https://reqres.in/img/faces/5-image.jpg"},{"id":6,"email":"tracey.ramos@reqres.in","first_name":"Tracey","last_name":"Ramos","avatar":"https://reqres.in/img/faces/6-image.jpg"}],"support":{"url":"https://reqres.in/#support-heading","text":"To keep ReqRes free, contributions towards server costs are appreciated!"}};
      mockHttpClient.get.and.returnValue(of(fakeApiResponse));

      // When
      service.loadUsers().subscribe((users) => {
        expect(users).toEqual(fakeApiResponse);
      });

      // then

    });

  });

});
