import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';

export interface UiAuthLayoutImage {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export interface UiAuthLayoutPanel {
  logo?: UiAuthLayoutImage;
  /** Ilustração principal. É carregada com prioridade (costuma ser o LCP da página). */
  image?: UiAuthLayoutImage;
  title: string;
  description?: string;
}

/**
 * Tela dividida para login, cadastro e recuperação de senha:
 * painel da marca à esquerda e o conteúdo projetado à direita.
 *
 * <ui-layout-auth [panel]="painel"><router-outlet /></ui-layout-auth>
 */
@Component({
  imports: [NgOptimizedImage],
  selector: 'ui-layout-auth',
  styleUrl: './auth.scss',
  templateUrl: './auth.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiAuthLayout {
  readonly panel = input.required<UiAuthLayoutPanel>();
}
