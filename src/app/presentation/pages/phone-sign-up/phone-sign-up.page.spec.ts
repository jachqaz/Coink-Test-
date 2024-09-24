import {ComponentFixture, TestBed} from '@angular/core/testing';
import {PhoneSignUpPage} from './phone-sign-up.page';

describe('PhoneSignUpPage', () => {
  let component: PhoneSignUpPage;
  let fixture: ComponentFixture<PhoneSignUpPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PhoneSignUpPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
