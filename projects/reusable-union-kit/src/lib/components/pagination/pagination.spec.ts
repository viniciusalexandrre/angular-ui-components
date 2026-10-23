import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiPagination } from './pagination';

describe('UiPagination', () => {
  let fixture: ComponentFixture<UiPagination>;

  beforeEach(async () => {
    fixture = TestBed.createComponent(UiPagination);
    fixture.componentRef.setInput('total', 50);
    fixture.componentRef.setInput('pageSize', 10);
    fixture.componentRef.setInput('currentPage', 0);
    await fixture.whenStable();
  });

  it('marca a página atual com aria-current', () => {
    const current = fixture.nativeElement.querySelector('[aria-current="page"]');
    expect(current.textContent.trim()).toBe('1');
  });

  it('emite a próxima página (base 0) e desabilita "anterior" na primeira', () => {
    const changed = vi.fn();
    fixture.componentInstance.pageChange.subscribe(changed);
    const buttons: HTMLButtonElement[] = Array.from(fixture.nativeElement.querySelectorAll('button'));

    buttons.at(-1)!.click();

    expect(changed).toHaveBeenCalledWith(1);
    expect(buttons[0].disabled).toBe(true);
  });

  it('não quebra com pageSize 0', async () => {
    fixture.componentRef.setInput('pageSize', 0);
    await fixture.whenStable();
    expect(fixture.componentInstance.totalPages()).toBe(1);
  });
});
