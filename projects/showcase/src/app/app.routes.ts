import { Routes } from '@angular/router';

export interface Cenario {
  path: string;
  titulo: string;
  descricao: string;
}

/** Um cenário real por página. O menu lateral é gerado a partir desta lista. */
export const CENARIOS: Cenario[] = [
  { path: 'formulario', titulo: 'Formulário de cadastro', descricao: 'Todos os campos e validação' },
  { path: 'login', titulo: 'Login em duas etapas', descricao: 'Senha e código OTP' },
  { path: 'arquivos', titulo: 'Lista de arquivos', descricao: 'Busca, modal e paginação' },
  { path: 'armazenamento', titulo: 'Armazenamento', descricao: 'Pastas, envio e ações' },
  { path: 'painel', titulo: 'Painel', descricao: 'Banner, gráficos e skeleton' },
  { path: 'personalizacao', titulo: 'Personalização', descricao: 'Variáveis CSS na prática' },
];

const componentes: Record<string, Routes[number]['loadComponent']> = {
  formulario: () => import('./form/form').then((m) => m.FormComponent),
  login: () => import('./login/login').then((m) => m.LoginComponent),
  arquivos: () => import('./arquivos/arquivos').then((m) => m.ArquivosComponent),
  armazenamento: () =>
    import('./armazenamento/armazenamento').then((m) => m.ArmazenamentoComponent),
  painel: () => import('./painel/painel').then((m) => m.PainelComponent),
  personalizacao: () =>
    import('./personalizacao/personalizacao').then((m) => m.PersonalizacaoComponent),
};

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'cenarios/formulario' },
  // Fora da área logada: usa o ui-layout-auth.
  {
    path: 'entrar',
    title: 'Entrar · UI Kit Showcase',
    loadComponent: () => import('./entrar/entrar').then((m) => m.EntrarComponent),
  },
  // Área logada: o shell usa o ui-layout-dashboard e renderiza os cenários dentro dele.
  {
    path: '',
    loadComponent: () => import('./shell/shell').then((m) => m.ShellComponent),
    children: [
      {
        path: 'cenarios',
        data: { breadcrumb: 'Cenários' },
        children: [
          { path: '', pathMatch: 'full', redirectTo: 'formulario' },
          ...CENARIOS.map((cenario) => ({
            path: cenario.path,
            title: `${cenario.titulo} · UI Kit Showcase`,
            data: { breadcrumb: cenario.titulo },
            loadComponent: componentes[cenario.path],
          })),
        ],
      },
    ],
  },
  { path: '**', redirectTo: 'cenarios/formulario' },
];
