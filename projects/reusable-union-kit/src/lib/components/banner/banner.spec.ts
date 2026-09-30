import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiBanner } from './banner';

describe('UiBanner', () => {
  let fixture: ComponentFixture<UiBanner>;

  beforeEach(async () => {
    fixture = TestBed.createComponent(UiBanner);
    fixture.componentRef.setInput('heading', 'Bem-vindo');
    await fixture.whenStable();
  });

  it('renderiza só o título quando os opcionais não são informados', () => {
    const el: HTMLElement = fixture.nativeElement;
    expect(el.querySelector('h2')?.textContent).toContain('Bem-vindo');
    expect(el.querySelector('img')).toBeNull();
    expect(el.querySelector('button')).toBeNull();
    expect(el.getAttribute('title')).toBeNull();
  });

  it('emite buttonClick ao clicar no botão', async () => {
    fixture.componentRef.setInput('buttonText', 'Começar');
    await fixture.whenStable();

    const clicked = vi.fn();
    fixture.componentInstance.buttonClick.subscribe(clicked);
    fixture.nativeElement.querySelector('button').click();

    expect(clicked).toHaveBeenCalledOnce();
  });
});
