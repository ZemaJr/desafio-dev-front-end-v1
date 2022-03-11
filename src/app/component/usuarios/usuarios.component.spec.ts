import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestesComponent } from './usuarios.component';

describe('TestesComponent', () => {
  let component: TestesComponent;
  let fixture: ComponentFixture<TestesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});