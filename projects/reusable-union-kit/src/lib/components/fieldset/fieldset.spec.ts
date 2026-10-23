import { TestBed } from '@angular/core/testing';

import { UiFieldset } from './fieldset';

describe('UiFieldset', () => {
  it('renderiza o título na legend e omite a descrição vazia', async () => {
    const fixture = TestBed.createComponent(UiFieldset);
    fixture.componentRef.setInput('title', 'Dados pessoais');
    await fixture.whenStable();

    const el: HTMLElement = fixture.nativeElement;
    expect(el.querySelector('legend')?.textContent).toContain('Dados pessoais');
    expect(el.querySelector('.fieldset-description')).toBeNull();
  });
});
