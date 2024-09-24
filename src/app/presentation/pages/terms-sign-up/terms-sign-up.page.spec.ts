import {ComponentFixture, TestBed} from '@angular/core/testing';
import {TermsSignUpPage} from './terms-sign-up.page';

describe('TermsSignUpPage', () => {
  let component: TermsSignUpPage;
  let fixture: ComponentFixture<TermsSignUpPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TermsSignUpPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
