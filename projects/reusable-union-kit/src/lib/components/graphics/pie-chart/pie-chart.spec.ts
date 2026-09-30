import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UiPieChart } from './pie-chart';

describe('UiPieChart', () => {
  let component: UiPieChart;
  let fixture: ComponentFixture<UiPieChart>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UiPieChart]
    })
      .compileComponents();

    fixture = TestBed.createComponent(UiPieChart);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
