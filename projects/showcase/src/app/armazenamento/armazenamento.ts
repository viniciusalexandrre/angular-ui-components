import { Component, computed, DestroyRef, inject, signal } from '@angular/core';
import {
  FileTableActionEvent,
  FileTableContent,
  FileTableEntry,
  FolderEntry,
  isFileEntry,
  ObjectEntry,
  UiBreadcrumbTable,
  UiBreadcrumbTableItem,
  UiButton,
  UiFileTable,
  UiInputFile,
  UiMenuItem,
  UiModal,
  UiPopup,
} from '../kit';
import { Avisos } from '../shared/avisos';

/** Um objeto do "bucket": a chave completa define a pasta (ex.: 'contratos/2026/a.pdf'). */
interface Objeto {
  key: string;
  size: number;
  last_modified: string;
}

const INICIAIS: Objeto[] = [
  { key: 'contratos/2026/contrato-cliente-a.pdf', size: 482_133, last_modified: '2026-10-21T13:05:00Z' },
  { key: 'contratos/2026/contrato-cliente-b.pdf', size: 391_920, last_modified: '2026-10-18T17:40:00Z' },
  { key: 'contratos/2025/aditivo.docx', size: 58_204, last_modified: '2025-12-02T12:00:00Z' },
  { key: 'imagens/logo.png', size: 24_576, last_modified: '2026-09-30T09:15:00Z' },
  { key: 'imagens/banner-home.jpg', size: 1_843_200, last_modified: '2026-10-02T15:22:00Z' },
  { key: 'relatorio-outubro.xlsx', size: 128_000, last_modified: '2026-10-25T20:10:00Z' },
  { key: 'backup.zip', size: 254_803_968, last_modified: '2026-10-26T03:00:00Z' },
];

type Dialogo = { tipo: 'enviar' } | { tipo: 'excluir'; entrada: FileTableEntry };

@Component({
  selector: 'app-armazenamento',
  imports: [UiBreadcrumbTable, UiButton, UiFileTable, UiInputFile, UiModal, UiPopup],
  template: `
    <header class="page-header">
      <h1>Armazenamento</h1>
      <p>
        <code>ui-file-table</code> navegando por pastas, com carregamento, menu de ações por tipo
        de linha, envio com <code>ui-input-file</code> e estados de erro e vazio.
      </p>
    </header>

    <section class="card stack">
      <div class="toolbar">
        <ui-breadcrumb-table
          class="caminho"
          rootLabel="Raiz"
          label="Pasta atual"
          [items]="caminho()"
          (rootSelected)="abrirPasta('')"
          (itemSelected)="abrirNivel($event)"
        />

        <div class="actions">
          <button ui-button variant="ghost" size="sm" type="button" (click)="simularErro()">Simular erro</button>
          <button ui-button size="sm" type="button" (click)="dialogo.set({ tipo: 'enviar' })">Enviar arquivos</button>
        </div>
      </div>

      <div class="tabela">
        <ui-file-table
          label="Arquivos do armazenamento"
          [content]="conteudo()"
          [isLoading]="carregando()"
          [errorMessage]="erro()"
          [optionsMenu]="acoesArquivo"
          [optionsMenuFolder]="acoesPasta"
          [loadingRows]="6"
          timezone="-0300"
          emptyText="Esta pasta está vazia. Envie um arquivo para começar."
          (rowClick)="abrir($event)"
          (menuAction)="executar($event)"
        />
      </div>

      <small class="muted">{{ resumo() }}</small>
    </section>

    @if (dialogo(); as d) {
      <ui-modal labelledBy="titulo-dialogo" (close)="fecharDialogo()">
        @if (d.tipo === 'enviar') {
          <div class="stack modal-envio">
            <h2 id="titulo-dialogo">Enviar para {{ pasta() || 'a raiz' }}</h2>
            <ui-input-file
              id="envio"
              label="Arquivos"
              hint="Até 50 MB por arquivo."
              [multiple]="true"
              [maxSize]="50 * 1024 * 1024"
              [(value)]="paraEnviar"
              (rejected)="avisos.mostrar('warning', 'Algum arquivo passou de 50 MB e foi ignorado.')"
            />
            <div class="actions">
              <button ui-button variant="secondary" type="button" (click)="fecharDialogo()">Cancelar</button>
              <button ui-button type="button" [disabled]="quantidadeParaEnviar() === 0" (click)="enviar()">
                Enviar {{ quantidadeParaEnviar() || '' }}
              </button>
            </div>
          </div>
        } @else {
          <div class="stack">
            <h2 id="titulo-dialogo">Excluir {{ eArquivo(d.entrada) ? 'arquivo' : 'pasta' }}?</h2>
            <p>
              <strong>{{ d.entrada.name }}</strong>
              {{ eArquivo(d.entrada) ? 'será removido.' : 'e tudo dentro dela serão removidos.' }}
            </p>
            <div class="actions">
              <button ui-button variant="secondary" type="button" (click)="fecharDialogo()">Cancelar</button>
              <button ui-button type="button" (click)="excluir(d.entrada)">Excluir</button>
            </div>
          </div>
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
      flex-wrap: wrap;
      align-items: center;
      justify-content: space-between;
      gap: 12px;
    }

    .caminho {
      flex: 1;
      min-width: 0;
    }

    /* O ui-file-table ocupa a altura do pai e rola com o cabeçalho fixo. */
    .tabela {
      display: flex;
      height: 420px;
    }

    .modal-envio {
      width: min(480px, 80vw);
    }
  `,
})
export class ArmazenamentoComponent {
  protected readonly avisos = new Avisos();
  protected readonly eArquivo = isFileEntry;

  protected readonly acoesArquivo: UiMenuItem[] = [
    { id: 'baixar', label: 'Baixar' },
    { id: 'copiar', label: 'Copiar caminho' },
    { id: 'excluir', label: 'Excluir', danger: true },
  ];
  protected readonly acoesPasta: UiMenuItem[] = [
    { id: 'abrir', label: 'Abrir' },
    { id: 'excluir', label: 'Excluir pasta', danger: true },
  ];

  private readonly objetos = signal<Objeto[]>(INICIAIS);
  /** Prefixo da pasta aberta ('' = raiz, 'contratos/2026/' = subpasta). */
  protected readonly pasta = signal('');
  protected readonly carregando = signal(true);
  protected readonly erro = signal<string | null>(null);
  protected readonly dialogo = signal<Dialogo | null>(null);
  protected readonly paraEnviar = signal<File | File[] | null>([]);

  /** Monta pastas e arquivos do nível atual a partir das chaves, como um bucket faz. */
  protected readonly conteudo = computed<FileTableContent>(() => {
    const prefixo = this.pasta();
    const pastas = new Map<string, FolderEntry>();
    const arquivos: ObjectEntry[] = [];

    for (const objeto of this.objetos()) {
      if (!objeto.key.startsWith(prefixo)) continue;
      const resto = objeto.key.slice(prefixo.length);
      const barra = resto.indexOf('/');

      if (barra >= 0) {
        const nome = resto.slice(0, barra);
        pastas.set(nome, { name: nome, prefix: `${prefixo}${nome}/` });
      } else {
        arquivos.push({ ...objeto, name: resto });
      }
    }

    return {
      folders: [...pastas.values()].sort((a, b) => a.name.localeCompare(b.name)),
      objects: arquivos.sort((a, b) => a.name.localeCompare(b.name)),
    };
  });

  private readonly partes = computed(() => this.pasta().split('/').filter(Boolean));

  protected readonly caminho = computed<UiBreadcrumbTableItem[]>(() =>
    this.partes().map((name, index) => ({ index, name })),
  );

  protected readonly resumo = computed(() => {
    const { folders, objects } = this.conteudo();
    return `${folders.length} pasta(s) e ${objects.length} arquivo(s) nesta pasta`;
  });

  protected readonly quantidadeParaEnviar = computed(() => {
    const valor = this.paraEnviar();
    return Array.isArray(valor) ? valor.length : valor ? 1 : 0;
  });

  private timer?: ReturnType<typeof setTimeout>;

  constructor() {
    inject(DestroyRef).onDestroy(() => clearTimeout(this.timer));
    this.carregar();
  }

  abrir(entrada: FileTableEntry): void {
    if (isFileEntry(entrada)) {
      this.avisos.mostrar('info', `Pré-visualizando "${entrada.name}" (simulação).`);
    } else {
      this.abrirPasta(entrada.prefix ?? `${this.pasta()}${entrada.name}/`);
    }
  }

  abrirPasta(prefixo: string): void {
    this.pasta.set(prefixo);
    this.carregar();
  }

  /** Volta para o nível `index` do caminho (0 = primeira pasta). */
  abrirNivel(index: number): void {
    this.abrirPasta(this.partes().slice(0, index + 1).join('/') + '/');
  }

  /** Um único ponto trata as ações do menu de pastas e de arquivos. */
  executar({ action, entry }: FileTableActionEvent): void {
    switch (action) {
      case 'abrir':
        this.abrir(entry);
        break;
      case 'baixar':
        this.avisos.mostrar('info', `Download de "${entry.name}" iniciado (simulação).`);
        break;
      case 'copiar':
        if (isFileEntry(entry)) {
          navigator.clipboard?.writeText(entry.key);
          this.avisos.mostrar('success', 'Caminho copiado.');
        }
        break;
      case 'excluir':
        this.dialogo.set({ tipo: 'excluir', entrada: entry });
        break;
    }
  }

  excluir(entrada: FileTableEntry): void {
    const alvo = isFileEntry(entrada) ? entrada.key : (entrada.prefix ?? `${this.pasta()}${entrada.name}/`);
    this.objetos.update((lista) =>
      lista.filter((o) => (isFileEntry(entrada) ? o.key !== alvo : !o.key.startsWith(alvo))),
    );
    this.fecharDialogo();
    this.avisos.mostrar('success', `"${entrada.name}" excluído.`);
  }

  enviar(): void {
    const valor = this.paraEnviar();
    const arquivos = Array.isArray(valor) ? valor : valor ? [valor] : [];
    const agora = new Date().toISOString();

    this.objetos.update((lista) => [
      ...lista.filter((o) => !arquivos.some((a) => o.key === this.pasta() + a.name)),
      ...arquivos.map((a) => ({ key: this.pasta() + a.name, size: a.size, last_modified: agora })),
    ]);
    this.fecharDialogo();
    this.avisos.mostrar('success', `${arquivos.length} arquivo(s) enviado(s).`);
  }

  fecharDialogo(): void {
    this.dialogo.set(null);
    this.paraEnviar.set([]);
  }

  simularErro(): void {
    this.erro.set('Não foi possível listar os arquivos. Tente novamente.');
    clearTimeout(this.timer);
    this.timer = setTimeout(() => this.carregar(), 3000);
  }

  private carregar(): void {
    this.erro.set(null);
    this.carregando.set(true);
    clearTimeout(this.timer);
    this.timer = setTimeout(() => this.carregando.set(false), 700); // simula a API
  }
}
