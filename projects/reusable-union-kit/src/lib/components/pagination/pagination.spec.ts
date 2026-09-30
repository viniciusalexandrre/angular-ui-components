import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UiPagination } from './pagination';

describe('UiPagination', () => {
  let component: UiPagination;
  let fixture: ComponentFixture<UiPagination>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UiPagination]
    })
      .compileComponents();

    fixture = TestBed.createComponent(UiPagination);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
