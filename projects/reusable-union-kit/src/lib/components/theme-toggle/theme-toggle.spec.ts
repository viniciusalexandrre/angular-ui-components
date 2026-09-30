import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UiThemeToggle } from './theme-toggle';

describe('UiThemeToggle', () => {
  let component: UiThemeToggle;
  let fixture: ComponentFixture<UiThemeToggle>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UiThemeToggle]
    })
      .compileComponents();

    fixture = TestBed.createComponent(UiThemeToggle);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
