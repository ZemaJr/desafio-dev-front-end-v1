import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersComponent } from './users.component';
import { fakeApiResponse, UsersService } from './users.service';
import { of } from 'rxjs';

describe('UsersComponent', () => {
  let component: UsersComponent;
  let fixture: ComponentFixture<UsersComponent>;
  let mockUsersService: jasmine.SpyObj<UsersService>;
  let template: HTMLElement;

  beforeEach(async () => {
    mockUsersService = jasmine.createSpyObj('mockUsersService', ['loadUsers']);

    await TestBed.configureTestingModule({
      declarations: [ UsersComponent ],
      providers: [{ provide: UsersService, useValue: mockUsersService }],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersComponent);
    template = fixture.nativeElement;
    component = fixture.componentInstance;
    // fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('#ngOnInit', () => {
    beforeEach(() => {
      // Given
      mockUsersService.loadUsers.and.returnValue(of(fakeApiResponse));
    });

    it('should load users from user service', () => {
      // When
      component.ngOnInit();

      // Then
      expect(mockUsersService.loadUsers).toHaveBeenCalled();
    });

    it('should update component users with users from service', () => {
      // When
      component.ngOnInit();

      // Then
      expect(component.users).toEqual(fakeApiResponse.data);

    });

  });

  describe('ui integration test', () => {
    beforeEach(() => {
      // Given
      mockUsersService.loadUsers.and.returnValue(of(fakeApiResponse));
    });

    it('should display each user', () => {
      // Given
      component.users = fakeApiResponse.data;

      // When
      fixture.detectChanges();

      // Then
      expect(template.querySelectorAll('[data-test="user-el"]').length)
      .toEqual(component.users.length);
    });
  });

});
