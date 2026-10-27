import { JsonPipe } from '@angular/common';
import { Component, signal } from '@angular/core';
import {
  disabled,
  email,
  form,
  FormField,
  FormRoot,
  max,
  min,
  minLength,
  pattern,
  readonly,
  required,
  validate,
} from '@angular/forms/signals';
import {
  AutocompleteOption,
  UiAutocomplete,
  UiButton,
  UiCopyTextButton,
  UiFieldset,
  UiInput,
  UiInputNumber,
  UiInputPassword,
  UiPopup,
  UiSelect,
  UiSelectOption,
} from '../kit';
import { Avisos, esperar } from '../shared/avisos';

interface Cadastro {
  nome: string;
  email: string;
  telefone: string;
  idade: number | null;
  estado: string | null;
  cidade: string | null;
  convite: string;
  senha: string;
  confirmarSenha: string;
}

const INICIAL: Cadastro = {
  nome: '',
  email: '',
  telefone: '',
  idade: null,
  estado: null,
  cidade: null,
  convite: 'CONVITE-2026-UI',
  senha: '',
  confirmarSenha: '',
};

const ESTADOS: UiSelectOption[] = [
  { label: 'São Paulo', value: 'SP' },
  { label: 'Rio de Janeiro', value: 'RJ' },
  { label: 'Minas Gerais', value: 'MG' },
  { label: 'Paraná', value: 'PR' },
  { label: 'Bahia (em breve)', value: 'BA', disabled: true },
];

const CIDADES: Record<string, string[]> = {
  SP: ['São Paulo', 'Campinas', 'Santos', 'Ribeirão Preto', 'Sorocaba', 'São José dos Campos'],
  RJ: ['Rio de Janeiro', 'Niterói', 'Petrópolis', 'Volta Redonda'],
  MG: ['Belo Horizonte', 'Uberlândia', 'Juiz de Fora', 'Ouro Preto'],
  PR: ['Curitiba', 'Londrina', 'Maringá', 'Foz do Iguaçu'],
};

@Component({
  selector: 'app-form',
  imports: [
    FormField,
    FormRoot,
    JsonPipe,
    UiAutocomplete,
    UiButton,
    UiCopyTextButton,
    UiFieldset,
    UiInput,
    UiInputNumber,
    UiInputPassword,
    UiPopup,
    UiSelect,
  ],
  template: `
    <header class="page-header">
      <h1>Formulário de cadastro</h1>
      <p>
        Todos os campos de formulário integrados ao Signal Forms: validação, campo dependente,
        busca assíncrona, somente leitura, envio e limpeza.
      </p>
    </header>

    <form class="card stack" [formRoot]="cadastro" novalidate>
      <ui-fieldset title="Dados pessoais" description="Como vamos falar com você.">
        <div class="grid-2">
          <ui-input id="nome" label="Nome completo" autocomplete="name" [formField]="cadastro.nome" />
          <ui-input
            id="email"
            label="E-mail"
            type="email"
            placeholder="voce@empresa.com"
            autocomplete="email"
            [formField]="cadastro.email"
          />
          <ui-input
            id="telefone"
            label="Telefone"
            type="tel"
            hint="Opcional. Ex.: (11) 91234-5678"
            autocomplete="tel"
            [formField]="cadastro.telefone"
          />
          <ui-input-number
            id="idade"
            label="Idade"
            hint="Entre 18 e 120 anos."
            [formField]="cadastro.idade"
          />
        </div>
      </ui-fieldset>

      <ui-fieldset
        title="Endereço"
        description="A cidade só é liberada depois de escolher o estado.&#10;Digite 2 letras para pesquisar."
      >
        <div class="grid-2">
          <ui-select
            id="estado"
            label="Estado"
            [options]="estados"
            [formField]="cadastro.estado"
            (selectionChange)="trocarEstado($event)"
          />
          <ui-autocomplete
            id="cidade"
            label="Cidade"
            placeholder="Pesquisar cidade"
            [options]="opcoesCidade()"
            [isLoading]="buscandoCidade()"
            [formField]="cadastro.cidade"
            (searchChange)="buscarCidade($event)"
          />
        </div>
      </ui-fieldset>

      <ui-fieldset title="Acesso" description="Crie uma senha para entrar na plataforma.">
        <div class="grid-2">
          <ui-input-password
            id="senha"
            label="Senha"
            hint="Mínimo de 8 caracteres."
            autocomplete="new-password"
            [formField]="cadastro.senha"
          />
          <ui-input-password
            id="confirmar-senha"
            label="Confirmar senha"
            autocomplete="new-password"
            [formField]="cadastro.confirmarSenha"
          />
          <div class="inline-field">
            <ui-input
              id="convite"
              label="Código de convite"
              hint="Gerado automaticamente (somente leitura)."
              [formField]="cadastro.convite"
            />
            <ui-copy-text-button
              [text]="model().convite"
              copyLabel="Copiar código de convite"
              (copied)="avisos.mostrar('info', 'Código copiado.')"
            />
          </div>
        </div>
      </ui-fieldset>

      <div class="actions">
        <button ui-button variant="secondary" type="button" (click)="limpar()">Limpar</button>
        <button ui-button type="submit" [disabled]="cadastro().submitting()">
          {{ cadastro().submitting() ? 'Enviando...' : 'Criar conta' }}
        </button>
      </div>
    </form>

    @if (enviado(); as dados) {
      <section class="card" aria-labelledby="titulo-enviado">
        <h2 id="titulo-enviado">Dados enviados</h2>
        <pre class="code">{{ dados | json }}</pre>
      </section>
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
    .inline-field {
      display: flex;
      align-items: flex-start;
      gap: 8px;

      ui-input {
        flex: 1;
      }

      ui-copy-text-button {
        margin-top: 28px;
      }
    }
  `,
})
export class FormComponent {
  protected readonly estados = ESTADOS;
  protected readonly avisos = new Avisos();

  readonly model = signal<Cadastro>({ ...INICIAL });
  protected readonly enviado = signal<Omit<Cadastro, 'senha' | 'confirmarSenha'> | null>(null);

  protected readonly opcoesCidade = signal<AutocompleteOption[]>([]);
  protected readonly buscandoCidade = signal(false);
  private buscaAtual?: ReturnType<typeof setTimeout>;

  readonly cadastro = form(
    this.model,
    (p) => {
      required(p.nome, { message: 'Informe seu nome.' });
      minLength(p.nome, 3, { message: 'O nome precisa ter pelo menos 3 letras.' });

      required(p.email, { message: 'Informe seu e-mail.' });
      email(p.email, { message: 'Digite um e-mail válido.' });

      pattern(p.telefone, /^\(?\d{2}\)?\s?9?\d{4}-?\d{4}$/, {
        message: 'Use o formato (11) 91234-5678.',
      });

      required(p.idade, { message: 'Informe sua idade.' });
      min(p.idade, 18, { message: 'É preciso ter pelo menos 18 anos.' });
      max(p.idade, 120, { message: 'Confira a idade informada.' });

      required(p.estado, { message: 'Selecione o estado.' });
      required(p.cidade, { message: 'Selecione a cidade.' });
      disabled(p.cidade, { when: ({ valueOf }) => valueOf(p.estado) === null });

      readonly(p.convite);

      required(p.senha, { message: 'Crie uma senha.' });
      minLength(p.senha, 8, { message: 'A senha precisa ter pelo menos 8 caracteres.' });
      required(p.confirmarSenha, { message: 'Confirme a senha.' });
      validate(p.confirmarSenha, ({ value, valueOf }) =>
        value() && value() !== valueOf(p.senha)
          ? { kind: 'senhasDiferentes', message: 'As senhas não conferem.' }
          : undefined,
      );
    },
    {
      submission: {
        action: async () => {
          await esperar(800); // simula a chamada à API
          const { senha, confirmarSenha, ...dados } = this.model();
          this.enviado.set(dados);
          this.avisos.mostrar('success', 'Conta criada com sucesso!');
          return undefined;
        },
        onInvalid: () => this.avisos.mostrar('error', 'Revise os campos destacados.'),
      },
    },
  );

  trocarEstado(estado: string | number | null): void {
    // Cidade depende do estado: limpa a escolha anterior e carrega a lista nova.
    this.model.update((m) => ({ ...m, cidade: null }));
    this.opcoesCidade.set(this.cidadesDe(estado, ''));
  }

  buscarCidade(termo: string): void {
    clearTimeout(this.buscaAtual);
    this.buscandoCidade.set(true);

    // Simula uma busca no servidor.
    this.buscaAtual = setTimeout(() => {
      this.opcoesCidade.set(this.cidadesDe(this.model().estado, termo));
      this.buscandoCidade.set(false);
    }, 400);
  }

  limpar(): void {
    this.model.set({ ...INICIAL });
    this.cadastro().reset();
    this.opcoesCidade.set([]);
    this.enviado.set(null);
  }

  private cidadesDe(estado: string | number | null, termo: string): AutocompleteOption[] {
    const normalizado = termo.trim().toLowerCase();
    return (CIDADES[String(estado)] ?? [])
      .filter((cidade) => cidade.toLowerCase().includes(normalizado))
      .map((cidade) => ({ label: cidade, value: cidade }));
  }
}
