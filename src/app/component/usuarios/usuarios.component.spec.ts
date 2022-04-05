import { UsuariosComponent } from './usuarios.component';
import { HttpClient } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatGridListModule } from '@angular/material/grid-list';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AppComponent } from 'src/app/app.component';
import { of } from 'rxjs';
import { FakeApiResponse, UserService } from './user.service';

describe('UsuariosComponent', () => {
  let component: UsuariosComponent;
  let fixture: ComponentFixture<UsuariosComponent>;
  let mockUserService: jasmine.SpyObj<UserService>;
  let template: HTMLElement;

  beforeEach(async () => {
    mockUserService = jasmine.createSpyObj('mockUserService', ['fetchUsers']);

    await TestBed.configureTestingModule({
      providers: [
        HttpClient,
        AppComponent,
        { provide: UserService, useValue: mockUserService },
      ],
      declarations: [UsuariosComponent],
      imports: [
        MatGridListModule,
        RouterTestingModule,
        HttpClientTestingModule,
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsuariosComponent);
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
      mockUserService.fetchUsers.and.returnValue(of(FakeApiResponse));
    });

    it('should load users from user service', () => {
      // When
      component.ngOnInit();

      // Then
      expect(mockUserService.fetchUsers).toHaveBeenCalled();
    });

    it('should update component users with users from service', () => {
      // When
      component.ngOnInit();

      // Then
      expect(component.users).toEqual(FakeApiResponse.data);
    });
  });

  describe('ui integration test', () => {
    beforeEach(() => {
      // Given
      mockUserService.fetchUsers.and.returnValue(of(FakeApiResponse));
    });

    it('should display each user', () => {
      // Given
      component.users = FakeApiResponse.data;

      // When
      fixture.detectChanges();

      // Then
      expect(template.querySelectorAll('[data-test="user-el"]').length).toEqual(
        component.users.length
      );
    });
  });
});
