import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiColumnGraph } from './column-graph';

describe('UiColumnGraph', () => {
  let fixture: ComponentFixture<UiColumnGraph>;

  beforeEach(async () => {
    fixture = TestBed.createComponent(UiColumnGraph);
    fixture.componentRef.setInput('title', 'Vendas');
    fixture.componentRef.setInput('data', {
      y_axios: [
        { label: 'Jan', value: 50 },
        { label: 'Fev', value: 100 },
      ],
      x_axios: [{ label: '100' }, { label: '0' }],
    });
    fixture.componentRef.setInput('highlight', 'Fev');
    await fixture.whenStable();
  });

  it('usa o maior valor como 100% quando maxValue não é informado', () => {
    const bars: HTMLElement[] = Array.from(fixture.nativeElement.querySelectorAll('.bar-column'));
    expect(bars.map((bar) => bar.style.height)).toEqual(['50%', '100%']);
  });

  it('destaca a coluna informada em highlight', () => {
    const highlighted = fixture.nativeElement.querySelector('.bar-column.highlighted');
    expect(highlighted.title).toBe('Fev: 100');
  });
});
