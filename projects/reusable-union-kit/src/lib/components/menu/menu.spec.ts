import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiMenu } from './menu';

describe('UiMenu', () => {
  let fixture: ComponentFixture<UiMenu>;
  let trigger: HTMLButtonElement;

  beforeEach(async () => {
    fixture = TestBed.createComponent(UiMenu);
    fixture.componentRef.setInput('label', 'Ações do arquivo');
    fixture.componentRef.setInput('items', [
      { id: 'editar', label: 'Editar' },
      { id: 'excluir', label: 'Excluir', danger: true },
    ]);
    await fixture.whenStable();
    trigger = fixture.nativeElement.querySelector('.menu-trigger');
  });

  const items = (): HTMLButtonElement[] =>
    Array.from(fixture.nativeElement.querySelectorAll('[role="menuitem"]'));

  it('abre pelo botão e leva o foco ao primeiro item', async () => {
    trigger.click();
    await fixture.whenStable();

    expect(trigger.getAttribute('aria-expanded')).toBe('true');
    expect(document.activeElement).toBe(items()[0]);
  });

  it('navega com as setas e fecha com Esc devolvendo o foco', async () => {
    trigger.click();
    await fixture.whenStable();
    const menu = fixture.nativeElement.querySelector('[role="menu"]');

    menu.dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowDown' }));
    expect(document.activeElement).toBe(items()[1]);

    menu.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape' }));
    await fixture.whenStable();
    expect(fixture.nativeElement.querySelector('[role="menu"]')).toBeNull();
    expect(document.activeElement).toBe(trigger);
  });

  it('emite o item escolhido e fecha', async () => {
    const chosen = vi.fn();
    fixture.componentInstance.itemSelect.subscribe(chosen);

    trigger.click();
    await fixture.whenStable();
    items()[1].click();
    await fixture.whenStable();

    expect(chosen).toHaveBeenCalledWith(expect.objectContaining({ id: 'excluir' }));
    expect(fixture.componentInstance.isOpen()).toBe(false);
  });

  it('fecha ao clicar fora', async () => {
    trigger.click();
    await fixture.whenStable();

    document.body.click();
    expect(fixture.componentInstance.isOpen()).toBe(false);
  });
});
