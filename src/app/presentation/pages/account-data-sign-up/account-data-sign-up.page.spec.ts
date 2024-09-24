import {ComponentFixture, TestBed} from '@angular/core/testing';
import {AccountDataSignUpPage} from './account-data-sign-up.page';

describe('AccountDataSignUpPage', () => {
  let component: AccountDataSignUpPage;
  let fixture: ComponentFixture<AccountDataSignUpPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountDataSignUpPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
