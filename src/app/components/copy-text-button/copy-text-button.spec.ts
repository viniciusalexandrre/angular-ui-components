import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CopyTextButton } from './copy-text-button';

describe('CopyTextButton', () => {
  let component: CopyTextButton;
  let fixture: ComponentFixture<CopyTextButton>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CopyTextButton]
    })
      .compileComponents();

    fixture = TestBed.createComponent(CopyTextButton);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
