import { TestBed } from '@angular/core/testing';

import { UiSkeleton } from './skeleton';

describe('UiSkeleton', () => {
  it('renderiza a quantidade de blocos com a classe da variante', async () => {
    const fixture = TestBed.createComponent(UiSkeleton);
    fixture.componentRef.setInput('variant', 'card');
    fixture.componentRef.setInput('quantity', 3);
    await fixture.whenStable();

    const host: HTMLElement = fixture.nativeElement;
    expect(host.classList).toContain('ui-skeleton');
    expect(host.classList).toContain('ui-skeleton-card');
    expect(host.getAttribute('role')).toBe('status');
    expect(host.querySelectorAll('.skeleton').length).toBe(3);
  });
});
