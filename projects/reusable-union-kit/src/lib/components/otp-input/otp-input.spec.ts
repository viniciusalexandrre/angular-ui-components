import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UiOtpInput } from './otp-input';

describe('UiOtpInput', () => {
  let component: UiOtpInput;
  let fixture: ComponentFixture<UiOtpInput>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UiOtpInput]
    })
      .compileComponents();

    fixture = TestBed.createComponent(UiOtpInput);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
