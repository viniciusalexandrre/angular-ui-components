import { TestBed } from '@angular/core/testing';

import { UiPieChart } from './pie-chart';

describe('UiPieChart', () => {
  it('calcula o percentual do 1º item sobre o 2º, limitado a 100', async () => {
    const fixture = TestBed.createComponent(UiPieChart);
    fixture.componentRef.setInput('title', 'Uso');
    fixture.componentRef.setInput('data', [
      { label: 'Usado', value: '30 GB', graphValue: 30 },
      { label: 'Total', value: '120 GB', graphValue: 120 },
    ]);
    await fixture.whenStable();

    expect(fixture.componentInstance.percentage()).toBe(25);
    const donut: HTMLElement = fixture.nativeElement.querySelector('[role="img"]');
    expect(donut.getAttribute('aria-label')).toBe('Uso: 25%');

    fixture.componentRef.setInput('data', [
      { label: 'Usado', value: '', graphValue: 200 },
      { label: 'Total', value: '', graphValue: 100 },
    ]);
    expect(fixture.componentInstance.percentage()).toBe(100);
  });
});
