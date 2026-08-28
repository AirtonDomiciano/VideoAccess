Este arquivo define as regras obrigatórias para qualquer alteração realizada por agentes de código neste projeto.

O objetivo principal é manter fidelidade visual total ao Figma, código sustentável, componentes reutilizáveis e uma arquitetura organizada que permita a evolução do projeto sem transformar a interface em um conjunto de páginas acopladas.

0. Next.js deste projeto

Este projeto usa uma versão do Next.js com mudanças importantes de APIs, convenções e estrutura de arquivos.

Antes de escrever código em Next.js, ler a documentação relevante em:

node_modules/next/dist/docs/

Seguir avisos de depreciação e não assumir APIs ou padrões antigos sem verificar a documentação local.

1. Figma é a fonte da verdade

O Figma oficial do projeto é a referência visual e funcional da interface.

Não reinterpretar o design. Não “melhorar” visualmente por conta própria. Não inventar estilos.

Ao implementar ou alterar uma tela existente no Figma:

seguir o layout com máxima fidelidade;

respeitar tipografia, cores, espaçamentos, bordas, raios e alinhamentos;

respeitar imagens, hierarquia visual e estados dos componentes;

respeitar o comportamento desktop/mobile;

preservar a intenção responsiva do layout.

Quando houver divergência entre o código atual e o Figma, o Figma prevalece, exceto quando houver uma limitação técnica real ou uma regra explicitamente documentada neste projeto.

Quando existir dúvida sobre um detalhe visual, não inventar. Consultar o Figma.

Quando existirem frames Desktop e Mobile no Figma, ambos devem ser analisados antes da implementação ou refatoração. Uma implementação não é considerada concluída enquanto as duas versões não estiverem fiéis ao Figma.

Componentes com layout/responsividade complexos devem preferir CSS/SCSS Modules em vez de grandes sequências de classes Tailwind no JSX. O TSX deve ficar focado em estrutura e comportamento; layout, grid, breakpoints, backgrounds, object-position, espaçamentos complexos, pseudo-elementos e regras específicas desktop/mobile devem ir para arquivos `*.module.css` ou `*.module.scss`.

2. Fidelidade visual não significa copiar medidas fixas cegamente

Os frames do Figma representam resoluções de referência. Eles não devem ser interpretados como larguras fixas do site inteiro.

Um frame criado em 1440px não significa:

width: 1440px;

O comportamento esperado é:

viewport
└── seção com width: 100%
    └── conteúdo centralizado com max-width

A implementação deve preservar a aparência do Figma enquanto continua responsiva.

3. Resoluções de referência

Desktop

1366 × 768

1440 × 900

1600 × 900

1920 × 1080

2560 × 1440

Mobile

Usar como principal referência o frame mobile existente no Figma e também validar larguras próximas de:

320px

360px

375px

390px

414px

430px

Não criar uma implementação diferente para cada resolução. Usar layout fluido.

4. Responsividade

Preferir:

width: 100%;

max-width;

min-width: 0;

Flexbox;

CSS Grid;

clamp() quando fizer sentido;

paddings responsivos;

containers centralizados;

object-fit: cover;

object-position;

breakpoints baseados na necessidade real do conteúdo.

Evitar:

largura fixa de página;

position: absolute para estruturar layouts;

offsets manuais por resolução;

dezenas de media queries específicas;

escalonar toda a interface com vw;

hacks para reproduzir apenas uma resolução.

Posicionamento absoluto pode ser usado para elementos visuais realmente sobrepostos, mas não como base estrutural da página.

5. Hero

A primeira dobra deve preencher adequadamente a viewport.

Quando Header e Hero Body fizerem parte da mesma seção, preferir conceitualmente:

<section className="flex min-h-[100svh] flex-col">
  <Header />
  <div className="flex-1">
    ...
  </div>
</section>

O background:

deve preencher a área disponível;

não pode distorcer;

deve utilizar cover ou comportamento equivalente;

deve preservar a composição visual definida no Figma;

pode utilizar object-position ou background-position para isso.

Não utilizar a altura fixa do frame do Figma como regra do navegador.

6. Não alterar o design sem solicitação

O agente NÃO deve:

trocar cores ou fontes;

modificar tamanhos arbitrariamente;

adicionar ou remover sombras por preferência pessoal;

arredondar elementos porque “fica melhor”;

adicionar animações não previstas;

alterar textos;

substituir imagens;

mudar posicionamentos;

adicionar componentes visuais não previstos;

alterar a identidade visual.

Qualquer melhoria visual não existente no Figma deve ser sugerida antes de ser implementada.

7. Design System

Sempre reutilizar os tokens e componentes existentes.

Não espalhar valores visuais repetidos pelo código.

Priorizar tokens de:

colors
spacing
typography
radius
shadow
container widths
breakpoints

Se já existir uma classe/token como:

bg-va-bg-secondary
text-va-text-primary

reutilizá-la.

Evitar valores Tailwind arbitrários quando existir um token equivalente.

Valores arbitrários podem ser usados quando forem necessários para reproduzir fielmente o Figma e ainda não houver token correspondente. Nesse caso, avaliar se o valor deve virar um token reutilizável.

8. Componentização obrigatória

Não construir páginas gigantes.

Elementos reutilizáveis devem virar componentes.

Exemplos:

Button
Container
SectionHeader
Header
MobileMenu
Footer
VideoCard
ChapterCard
MaterialCard
ProgressBar
Badge
Accordion
VideoPlayer
Sidebar
PortalHeader

Uma página deve principalmente compor componentes, e não possuir centenas de linhas de markup repetido.

9. Não componentizar tudo

Criar um componente quando houver pelo menos um destes motivos:

é reutilizado;

possui responsabilidade visual clara;

possui comportamento próprio;

possui variantes;

melhora significativamente a legibilidade;

representa um conceito do domínio;

será reutilizado entre desktop e mobile.

Evitar abstrações prematuras e componentes criados para cada <div>.

10. Arquitetura

O projeto deve seguir uma arquitetura inspirada em Hexagonal Architecture / Clean Architecture, adaptada ao front-end.

Não aplicar arquitetura hexagonal de forma dogmática.

O objetivo é separar:

UI
Application
Domain
Infrastructure

11. Camadas

UI / Presentation

Responsável por páginas, componentes, layout, interação visual, estados visuais e adaptação desktop/mobile.

A UI não deve conhecer detalhes internos de banco de dados ou SDKs externos.

Application

Responsável pelos casos de uso.

Exemplos futuros:

GetStudentProgress
SaveVideoProgress
ToggleFavoriteLesson
CompleteLesson
GetChapters
GetMaterials

Domain

Responsável pelas regras e conceitos do sistema.

Exemplos:

Student
Chapter
Lesson
Progress
Favorite
Material
Exercise

O domínio não deve depender de React, Next.js, Supabase, Firebase, navegador, componentes ou Tailwind.

Infrastructure

Responsável por integrações externas.

Exemplos:

Supabase
Firebase
localStorage
Video provider
HTTP APIs
Analytics

Essas implementações devem ficar atrás de interfaces/ports quando fizer sentido.

12. Estrutura sugerida

Não mover arquivos existentes apenas para satisfazer esta estrutura. Utilizá-la como direção para novos módulos e refatorações necessárias.

src/
├── app/
│   ├── ...
│   └── page.tsx
├── components/
│   ├── ui/
│   ├── layout/
│   └── shared/
├── features/
│   ├── landing/
│   │   ├── components/
│   │   └── sections/
│   └── student-portal/
│       ├── components/
│       ├── domain/
│       ├── application/
│       └── infrastructure/
├── domain/
├── application/
├── infrastructure/
├── lib/
├── hooks/
├── types/
└── styles/

Não é obrigatório criar todas essas pastas antecipadamente. Criá-las somente quando existir código que justifique sua existência.

13. Features

Sempre que possível, manter código específico de uma funcionalidade próximo dela.

Um componente exclusivo do Portal do Aluno não deve ser colocado em shared sem necessidade.

14. Componentes compartilhados

components/ui deve conter componentes realmente genéricos, como Button, Badge, Modal, Accordion, Progress e Input.

components/layout pode conter Container, Header, Footer, Sidebar e Section.

Componentes específicos de uma feature ficam dentro da própria feature.

15. Regra de dependências

A direção desejada é:

UI
↓
Application
↓
Domain
↑
Infrastructure implementa interfaces necessárias

O domínio deve ser a parte mais independente do sistema.

Evitar:

domain -> React
domain -> Supabase
domain -> Next.js
domain -> Tailwind

16. Serviços externos

Caso o projeto utilize futuramente Supabase, Firebase ou outro serviço, não espalhar chamadas do SDK pelas páginas e componentes.

Evitar chamadas diretas de infraestrutura dentro de componentes visuais.

Preferir conceitualmente:

Component
↓
Hook / Use Case
↓
Repository Interface
↓
SupabaseProgressRepository

17. Estado local

Estado puramente visual pode permanecer no componente.

Exemplos:

menu aberto
accordion aberto
modal aberto
hover
tab selecionada

Estado relacionado ao domínio deve ser separado quando começar a possuir regras relevantes.

18. Código limpo

Priorizar:

nomes claros;

funções pequenas;

componentes focados;

early return;

tipos explícitos quando úteis;

composição;

pouca duplicação.

Evitar:

componentes gigantes;

condicionais profundamente aninhadas;

lógica de domínio dentro do JSX;

valores mágicos repetidos;

abstrações desnecessárias;

arquivos utils que viram depósito de funções.

19. TypeScript

Manter TypeScript estrito.

Evitar any sempre que houver um tipo conhecido.

Preferir tipos baseados nos conceitos reais do sistema.

type LessonStatus =
  | "not-started"
  | "in-progress"
  | "completed"
  | "locked";

20. Server e Client Components

No Next.js, não adicionar "use client" automaticamente.

Usar Server Components por padrão quando possível.

Adicionar "use client" somente quando o componente realmente precisar de state, effect, eventos, APIs do navegador, hooks client-side ou bibliotecas dependentes do browser.

Manter componentes client o mais baixos possível na árvore.

21. Imagens

Usar os assets oficiais do projeto.

Não substituir imagens do Figma por imagens “parecidas”.

Preservar aspect ratio, crop, posição e qualidade.

Quando aplicável, utilizar next/image.

Backgrounds decorativos podem utilizar CSS quando essa abordagem reproduzir melhor o Figma.

22. Acessibilidade

Fidelidade visual não elimina acessibilidade.

Garantir elementos semânticos, button para ações, a para navegação, alt apropriado, navegação por teclado, foco visível, labels e área de toque adequada em mobile.

23. Mobile e Desktop devem compartilhar código

Não duplicar páginas completas para desktop e mobile.

Evitar:

HeroDesktop.tsx
HeroMobile.tsx

quando a diferença puder ser resolvida responsivamente.

Preferir um único Hero.tsx com layout responsivo.

Separar componentes somente quando o comportamento ou estrutura for realmente diferente.

24. Antes de criar um componente novo

Verificar:

já existe componente equivalente?

o Design System já possui esse elemento?

é possível adicionar uma variante ao componente existente?

o componente novo realmente possui responsabilidade própria?

Não duplicar componentes visualmente iguais.

25. Fluxo obrigatório ao implementar uma tela do Figma

localizar o frame/node correto no Figma;

analisar o design;

identificar componentes existentes no código;

identificar tokens existentes;

implementar reutilizando o que já existe;

comparar o resultado com o Figma;

validar responsividade;

somente então considerar a tarefa concluída.

26. Comparação visual

Conferir pelo menos:

layout
container
alignment
spacing
font family
font size
font weight
line height
colors
borders
radius
images
crop
responsive behavior

“Parecido” não é suficiente quando o Figma fornece a especificação. A meta é a maior fidelidade possível.

27. Não refatorar fora do escopo

Ao corrigir uma seção:

não reescrever outras páginas;

não trocar bibliotecas;

não alterar arquitetura sem necessidade;

não renomear dezenas de arquivos;

não mudar comportamento não relacionado.

Fazer mudanças pequenas, previsíveis e focadas.

Refatorações maiores devem ser propostas separadamente.

28. Qualidade antes de concluir

Antes de finalizar uma alteração:

verificar TypeScript;

verificar lint;

verificar build;

verificar console;

verificar overflow horizontal;

verificar mobile;

verificar desktop;

comparar visualmente com o Figma.

Não considerar uma tela pronta apenas porque compilou.

29. Critério de conclusão visual

Uma implementação baseada no Figma só pode ser considerada concluída quando:

reproduzir corretamente a tela de referência;

responder corretamente em resoluções intermediárias;

não possuir overflow indevido;

não possuir elementos desalinhados;

não possuir valores improvisados que alterem o design;

reutilizar componentes existentes quando aplicável;

não introduzir regressões em mobile ou desktop.

30. Princípio final

Quando houver conflito entre “fazer rápido” e “preservar o design e a arquitetura”, preservar o design e a arquitetura — sem criar complexidade sem benefício real.

Figma define como deve parecer.

O domínio define como deve se comportar.

A aplicação organiza os casos de uso.

A infraestrutura implementa os detalhes externos.

Os componentes mantêm a interface reutilizável e consistente.
