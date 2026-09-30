import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UiPopup } from './popup';

describe('UiPopup', () => {
  let component: UiPopup;
  let fixture: ComponentFixture<UiPopup>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UiPopup]
    })
      .compileComponents();

    fixture = TestBed.createComponent(UiPopup);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
