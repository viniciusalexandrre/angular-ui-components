import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UiColumnGraph } from './column-graph';

describe('UiColumnGraph', () => {
  let component: UiColumnGraph;
  let fixture: ComponentFixture<UiColumnGraph>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UiColumnGraph]
    })
      .compileComponents();

    fixture = TestBed.createComponent(UiColumnGraph);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
