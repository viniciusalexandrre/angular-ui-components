import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ColumnGraph } from './column-graph';

describe('ColumnGraph', () => {
  let component: ColumnGraph;
  let fixture: ComponentFixture<ColumnGraph>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ColumnGraph]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ColumnGraph);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
