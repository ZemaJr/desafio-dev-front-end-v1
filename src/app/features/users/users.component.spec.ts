import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersComponent } from './users.component';
import { UsersService } from './users.service';

fdescribe('UsersComponent', () => {
  let component: UsersComponent;
  let fixture: ComponentFixture<UsersComponent>;
  let mockUserService: jasmine.SpyObj<UsersService>;

  beforeEach(async () => {
    mockUserService = jasmine.createSpyObj('mockUserService', ['loadUsers']);

    await TestBed.configureTestingModule({
      declarations: [ UsersComponent ],
      providers: [{ provide: UsersService, useValue: mockUserService }],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('#ngOnInit', () => {
    it('should load users from user service', () => {
      // When
      component.ngOnInit();

      // Then
      expect(mockUserService.loadUsers).toHaveBeenCalled();
    });

  });

});
