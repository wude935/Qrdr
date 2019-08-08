import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CartFabComponent } from './cart-fab.component';

describe('CartFabComponent', () => {
  let component: CartFabComponent;
  let fixture: ComponentFixture<CartFabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CartFabComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartFabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
