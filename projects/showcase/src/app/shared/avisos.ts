import { DestroyRef, inject, signal } from '@angular/core';
import { PopupType } from '../kit';

export interface Aviso {
  type: PopupType;
  message: string;
}

/**
 * Controla o <ui-popup> de uma página: mostra um aviso por vez e fecha sozinho.
 * Crie como campo do componente (precisa de contexto de injeção).
 */
export class Avisos {
  readonly atual = signal<Aviso | null>(null);
  private timer?: ReturnType<typeof setTimeout>;

  constructor(private readonly duracao = 4000) {
    inject(DestroyRef).onDestroy(() => clearTimeout(this.timer));
  }

  mostrar(type: PopupType, message: string): void {
    clearTimeout(this.timer);
    this.atual.set({ type, message });
    this.timer = setTimeout(() => this.fechar(), this.duracao);
  }

  fechar(): void {
    clearTimeout(this.timer);
    this.atual.set(null);
  }
}

export const esperar = (ms: number) => new Promise<void>((resolve) => setTimeout(resolve, ms));
