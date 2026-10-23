import { Component, computed, DestroyRef, inject, linkedSignal, signal } from '@angular/core';
import { form, FormField, required } from '@angular/forms/signals';
import {
  formatBytes,
  UiButton,
  UiCopyTextButton,
  UiInput,
  UiInputSearch,
  UiModal,
  UiPagination,
  UiPopup,
  UiTable,
  UiTableAction,
  UiTableActionEvent,
  UiTableCell,
  UiTableColumn,
  UiTableDetail,
} from '../kit';
import { Avisos } from '../shared/avisos';

interface Arquivo {
  id: number;
  nome: string;
  tamanho: number;
  modificado: Date;
  link: string;
  protegido: boolean;
}

type Dialogo = { tipo: 'excluir' | 'renomear'; arquivo: Arquivo };

const POR_PAGINA = 8;
const NOMES = ['relatorio', 'contrato', 'apresentacao', 'planilha-vendas', 'foto-equipe', 'backup', 'nota-fiscal'];
const EXTENSOES = ['pdf', 'docx', 'pptx', 'xlsx', 'png', 'zip'];
const dataHora = new Intl.DateTimeFormat('pt-BR', { dateStyle: 'short', timeStyle: 'short' });
const dataCompleta = new Intl.DateTimeFormat('pt-BR', { dateStyle: 'full', timeStyle: 'short' });

function gerarArquivos(): Arquivo[] {
  return Array.from({ length: 43 }, (_, i) => {
    const nome = `${NOMES[i % NOMES.length]}-${String(i + 1).padStart(2, '0')}.${EXTENSOES[i % EXTENSOES.length]}`;
    return {
      id: i + 1,
      nome,
      tamanho: Math.round(((i * 7919) % 50_000) * 1024 + 512),
      modificado: new Date(2026, 9, 23 - (i % 28), 9 + (i % 8), (i * 13) % 60),
      link: `https://arquivos.exemplo.com/compartilhar/${nome}`,
      protegido: nome.startsWith('backup'),
    };
  });
}

@Component({
  selector: 'app-arquivos',
  imports: [
    FormField,
    UiButton,
    UiCopyTextButton,
    UiInput,
    UiInputSearch,
    UiModal,
    UiPagination,
    UiPopup,
    UiTable,
    UiTableCell,
    UiTableDetail,
  ],
  template: `
    <header class="page-header">
      <h1>Lista de arquivos</h1>
      <p>
        Tabela configurada por arrays: <code>columns</code> gera cabeçalho e células,
        <code>actions</code> gera o menu de cada linha e um template mostra mais informações.
      </p>
    </header>

    <section class="card stack">
      <div class="toolbar">
        <ui-input-search
          id="busca-arquivos"
          label="Pesquisar arquivos"
          placeholder="Pesquisar por nome..."
          [(value)]="termo"
          (search)="avisos.mostrar('info', resumoBusca())"
        />
        <button ui-button variant="secondary" type="button" [disabled]="carregando()" (click)="recarregar()">
          Recarregar
        </button>
      </div>

      <ui-table
        label="Arquivos"
        [columns]="colunas"
        [rows]="paginaAtual()"
        [rowKey]="porId"
        [actions]="acoes"
        [loading]="carregando()"
        [loadingRows]="POR_PAGINA"
        loadingText="Carregando arquivos..."
        [emptyText]="textoVazio()"
        (action)="executar($event)"
      >
        <!-- Célula personalizada: a coluna "link" mostra um botão em vez de texto. -->
        <ng-template uiTableCell="link" let-arquivo>
          <ui-copy-text-button
            [text]="arquivo.link"
            [copyLabel]="'Copiar link de ' + arquivo.nome"
            (copied)="avisos.mostrar('success', 'Link copiado.')"
            (copyFailed)="avisos.mostrar('error', 'Não foi possível copiar.')"
          />
        </ng-template>

        <!-- Mais informações, exibidas ao expandir a linha. -->
        <ng-template uiTableDetail let-arquivo>
          <dl class="detalhes">
            <dt>Tipo</dt>
            <dd>{{ extensao(arquivo) }}</dd>
            <dt>Tamanho exato</dt>
            <dd>{{ arquivo.tamanho.toLocaleString('pt-BR') }} bytes</dd>
            <dt>Modificado em</dt>
            <dd>{{ dataCompleta(arquivo) }}</dd>
            <dt>Link</dt>
            <dd>{{ arquivo.link }}</dd>
            <dt>Proteção</dt>
            <dd>{{ arquivo.protegido ? 'Protegido contra exclusão' : 'Nenhuma' }}</dd>
          </dl>
        </ng-template>
      </ui-table>

      @if (!carregando() && filtrados().length > 0) {
        <div class="footer">
          <small class="muted">{{ resumoBusca() }}</small>
          <ui-pagination
            [total]="filtrados().length"
            [pageSize]="POR_PAGINA"
            [currentPage]="pagina()"
            (pageChange)="pagina.set($event)"
          />
        </div>
      }
    </section>

    @if (dialogo(); as d) {
      <ui-modal labelledBy="titulo-dialogo" (close)="dialogo.set(null)">
        @if (d.tipo === 'excluir') {
          <div class="stack">
            <h2 id="titulo-dialogo">Excluir arquivo?</h2>
            <p><strong>{{ d.arquivo.nome }}</strong> será removido permanentemente.</p>
            <div class="actions">
              <button ui-button variant="secondary" type="button" (click)="dialogo.set(null)">Cancelar</button>
              <button ui-button type="button" (click)="excluir(d.arquivo)">Excluir</button>
            </div>
          </div>
        } @else {
          <form class="stack" (submit)="$event.preventDefault(); renomear(d.arquivo)">
            <h2 id="titulo-dialogo">Renomear arquivo</h2>
            <ui-input id="novo-nome" label="Novo nome" [formField]="renomeacao.nome" />
            <div class="actions">
              <button ui-button variant="secondary" type="button" (click)="dialogo.set(null)">Cancelar</button>
              <button ui-button type="submit" [disabled]="renomeacao().invalid()">Salvar</button>
            </div>
          </form>
        }
      </ui-modal>
    }

    @if (avisos.atual(); as aviso) {
      <ui-popup
        [type]="aviso.type"
        [message]="aviso.message"
        animate.leave="ui-popup-leave"
        (closed)="avisos.fechar()"
      />
    }
  `,
  styles: `
    .toolbar {
      display: flex;
      gap: 12px;
      align-items: center;

      ui-input-search {
        max-width: 360px;
      }
    }

    ui-table {
      --ui-table-cell-white-space: nowrap;
    }

    .detalhes {
      display: grid;
      grid-template-columns: max-content 1fr;
      gap: 6px 24px;
      margin: 0;
      font-size: 13px;

      dt {
        color: var(--c7);
      }

      dd {
        margin: 0;
        word-break: break-all;
      }
    }

    .footer {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: space-between;
      gap: 12px;
    }
  `,
})
export class ArquivosComponent {
  protected readonly POR_PAGINA = POR_PAGINA;
  protected readonly avisos = new Avisos();

  /** Basta descrever as colunas: a tabela monta <th> e <td> a partir daqui. */
  protected readonly colunas: UiTableColumn<Arquivo>[] = [
    { key: 'nome', header: 'Nome' },
    { key: 'tamanho', header: 'Tamanho', value: (a) => formatBytes(a.tamanho), align: 'end' },
    { key: 'modificado', header: 'Modificado', value: (a) => dataHora.format(a.modificado) },
    { key: 'link', header: 'Compartilhar', align: 'center' },
  ];

  /** Opções do menu de cada linha. `disabled`/`hidden` recebem a linha. */
  protected readonly acoes: UiTableAction<Arquivo>[] = [
    { id: 'baixar', label: 'Baixar' },
    { id: 'renomear', label: 'Renomear' },
    { id: 'excluir', label: 'Excluir', danger: true, disabled: (a) => a.protegido },
  ];

  protected readonly porId = (arquivo: Arquivo) => arquivo.id;

  private readonly arquivos = signal<Arquivo[]>(gerarArquivos());
  protected readonly carregando = signal(true);
  protected readonly termo = signal('');
  protected readonly dialogo = signal<Dialogo | null>(null);

  private readonly novoNome = signal({ nome: '' });
  protected readonly renomeacao = form(this.novoNome, (p) =>
    required(p.nome, { message: 'Informe o nome do arquivo.' }),
  );

  protected readonly filtrados = computed(() => {
    const termo = this.termo().trim().toLowerCase();
    return this.arquivos().filter((a) => a.nome.toLowerCase().includes(termo));
  });

  /** Volta para a primeira página sempre que a busca muda. */
  protected readonly pagina = linkedSignal({
    source: this.termo,
    computation: () => 0,
  });

  protected readonly paginaAtual = computed(() => {
    const inicio = this.pagina() * POR_PAGINA;
    return this.filtrados().slice(inicio, inicio + POR_PAGINA);
  });

  protected readonly resumoBusca = computed(() => {
    const total = this.filtrados().length;
    return `${total} ${total === 1 ? 'arquivo encontrado' : 'arquivos encontrados'}`;
  });

  protected readonly textoVazio = computed(() =>
    this.termo() ? `Nenhum arquivo encontrado para "${this.termo()}".` : 'Nenhum arquivo por aqui.',
  );

  private timer?: ReturnType<typeof setTimeout>;

  constructor() {
    inject(DestroyRef).onDestroy(() => clearTimeout(this.timer));
    this.recarregar();
  }

  /** Um único ponto trata todas as ações do menu. */
  executar({ action, row }: UiTableActionEvent<Arquivo>): void {
    switch (action) {
      case 'baixar':
        this.avisos.mostrar('info', `Download de "${row.nome}" iniciado (simulação).`);
        break;
      case 'renomear':
        this.novoNome.set({ nome: row.nome });
        this.dialogo.set({ tipo: 'renomear', arquivo: row });
        break;
      case 'excluir':
        this.dialogo.set({ tipo: 'excluir', arquivo: row });
        break;
    }
  }

  recarregar(): void {
    this.carregando.set(true);
    clearTimeout(this.timer);
    this.timer = setTimeout(() => this.carregando.set(false), 900); // simula a API
  }

  renomear(arquivo: Arquivo): void {
    const nome = this.novoNome().nome.trim();
    if (!nome) return;

    this.arquivos.update((lista) => lista.map((a) => (a.id === arquivo.id ? { ...a, nome } : a)));
    this.dialogo.set(null);
    this.avisos.mostrar('success', `Renomeado para "${nome}".`);
  }

  excluir(arquivo: Arquivo): void {
    this.arquivos.update((lista) => lista.filter((a) => a.id !== arquivo.id));
    this.dialogo.set(null);

    // Se a página atual ficou vazia, volta uma.
    const ultimaPagina = Math.max(Math.ceil(this.filtrados().length / POR_PAGINA) - 1, 0);
    if (this.pagina() > ultimaPagina) this.pagina.set(ultimaPagina);

    this.avisos.mostrar('success', `"${arquivo.nome}" excluído.`);
  }

  protected extensao(arquivo: Arquivo): string {
    return arquivo.nome.split('.').pop()!.toUpperCase();
  }

  protected dataCompleta(arquivo: Arquivo): string {
    return dataCompleta.format(arquivo.modificado);
  }
}
