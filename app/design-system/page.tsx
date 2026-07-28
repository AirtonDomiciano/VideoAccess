import {
  Alert,
  Avatar,
  Badge,
  BottomNavigation,
  ChapterCard,
  ContentStatePill,
  ContinueWatchingButton,
  EmptyState,
  ExerciseField,
  FaqItem,
  LoadingSpinner,
  MarketingFooter,
  MarketingHeader,
  MarkCompleteButton,
  MaterialCard,
  ModalShell,
  PlayerControls,
  PortalSidebar,
  ProgressBar,
  SearchField,
  SectionHeader,
  StatIndicator,
  TestimonialCard,
  TextField,
  Tooltip,
  VideoAccessButton,
  VideoCard,
  type ContentStateValue,
  videoAccessColors,
  videoAccessSpacing,
} from "@/components/design-system";
import type { ReactNode } from "react";

const colorGroups = [
  ["Fundos", videoAccessColors.bg],
  ["Superficies", videoAccessColors.surface],
  ["Texto", videoAccessColors.text],
  ["Destaque", videoAccessColors.accent],
  ["Status", videoAccessColors.status],
  ["Bordas", videoAccessColors.border],
  ["Escuros", videoAccessColors.dark],
] as const;

const contentStates: ContentStateValue[] = [
  "not-started",
  "in-progress",
  "playing",
  "completed",
  "locked",
  "favorite",
  "available",
  "unavailable",
];

function Section({
  title,
  description,
  children,
}: {
  title: string;
  description?: string;
  children: ReactNode;
}) {
  return (
    <section className="border-t border-va-border-default py-10">
      <div className="mb-6">
        <h2 className="font-serif text-4xl font-bold leading-tight text-va-text-primary">{title}</h2>
        {description ? <p className="mt-2 text-sm text-va-text-tertiary">{description}</p> : null}
      </div>
      {children}
    </section>
  );
}

export default function DesignSystemPage() {
  return (
    <main className="min-h-screen bg-va-bg-primary px-6 py-10 text-va-text-primary md:px-14">
      <div className="mx-auto max-w-7xl">
        <header className="mb-12">
          <h1 className="font-serif text-5xl font-bold leading-tight">VideoAccess Design System</h1>
          <p className="mt-4 max-w-3xl text-base leading-7 text-va-text-tertiary">
            Sistema de design para web e Portal do Aluno, baseado na identidade visual do livro
            Relacionamentos. Uma Profissao que Exige Preparo.
          </p>
        </header>

        <Section title="1.1 Paleta de Cores" description="Tokens semanticos extraidos do Figma.">
          <div className="grid gap-8">
            {colorGroups.map(([groupName, colors]) => (
              <div key={groupName}>
                <p className="mb-3 text-[11px] font-bold tracking-[0.8em] text-va-text-tertiary">
                  {groupName.toUpperCase()}
                </p>
                <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
                  {Object.entries(colors).map(([name, value]) => (
                    <div key={name}>
                      <div
                        className="h-20 rounded-va-md border border-va-border-light"
                        style={{ backgroundColor: value }}
                      />
                      <p className="mt-2 text-[11px] font-semibold text-va-text-primary">{name}</p>
                      <p className="mt-1 font-ui text-[11px] text-va-text-tertiary">{value}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Section>

        <Section title="1.2 Tipografia" description="Familias e escala de texto do projeto.">
          <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(280px,0.8fr)]">
            <div className="grid gap-5">
              <p className="font-serif text-5xl font-bold leading-[1.2]">Historias de Transformacao</p>
              <p className="font-serif text-2xl font-bold leading-[1.2]">Capitulos do Livro</p>
              <p className="font-serif text-[22px] font-semibold">O que e o metodo REMAR?</p>
              <p className="font-serif text-5xl leading-[1.2]">Perguntas Frequentes</p>
              <p className="font-serif text-lg italic leading-[1.5]">"O livro nos trouxe clareza."</p>
              <p className="font-serif text-[32px] font-bold italic">Relacionamentos.</p>
              <p className="font-display text-2xl italic">Valeria Schuster</p>
              <p className="font-display text-sm font-semibold">DUVIDAS COMUNS</p>
              <p className="text-sm font-bold">NAVEGACAO</p>
              <p className="text-base leading-[1.6]">Construa o relacionamento que voces sempre sonharam.</p>
              <p className="font-ui text-[13px]">Capitulo 2 de 12 - 38% concluido</p>
            </div>
            <div className="rounded-va-lg border border-va-border-lighter bg-va-bg-white p-5 text-sm leading-7 text-va-text-tertiary">
              <p>
                Serif: Cormorant Garamond. Display: Playfair Display. Corpo: Inter. UI/meta:
                Geist.
              </p>
            </div>
          </div>
        </Section>

        <Section title="1.3 Espacamento" description="Escala baseada em multiplos de 4px.">
          <div className="flex flex-wrap items-end gap-6">
            {videoAccessSpacing.map((space) => (
              <div key={space} className="flex flex-col items-center gap-2">
                <div
                  className="rounded-sm bg-va-accent-primary"
                  style={{
                    width: Math.min(space, 60),
                    height: Math.min(space, 60),
                  }}
                />
                <span className="font-ui text-xs font-semibold">{space}</span>
              </div>
            ))}
          </div>
        </Section>

        <Section title="2. Componentes Base">
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-va-lg border border-va-border-lighter bg-va-bg-white p-6">
              <div className="flex flex-wrap items-center gap-3">
                <VideoAccessButton>Primario</VideoAccessButton>
                <VideoAccessButton variant="secondary">Secundario</VideoAccessButton>
                <VideoAccessButton variant="outline">Outline</VideoAccessButton>
                <VideoAccessButton variant="ghost">Ghost</VideoAccessButton>
                <VideoAccessButton size="icon" aria-label="Play">
                  +
                </VideoAccessButton>
              </div>
              <div className="mt-6 grid gap-3">
                <TextField placeholder="Nome completo" />
                <SearchField placeholder="Pesquisar aulas" />
                <TextField placeholder="Campo com erro" error />
              </div>
            </div>
            <div className="rounded-va-lg border border-va-border-lighter bg-va-bg-white p-6">
              <div className="flex flex-wrap gap-3">
                <Badge>Nao iniciado</Badge>
                <Badge status="in-progress">Em andamento</Badge>
                <Badge status="playing">Reproduzindo</Badge>
                <Badge status="completed">Concluido</Badge>
                <Badge status="locked">Bloqueado</Badge>
                <Badge status="available">Disponivel</Badge>
              </div>
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <Avatar size="sm" />
                <Avatar />
                <Avatar size="lg" />
              </div>
              <div className="mt-6 grid gap-3">
                <Alert variant="success" title="Acesso liberado">
                  O aluno ja pode continuar assistindo.
                </Alert>
                <LoadingSpinner />
                <Tooltip>Estado sincronizado</Tooltip>
              </div>
            </div>
            <ModalShell title="Confirmar liberacao">Esta acao atualiza o acesso do aluno.</ModalShell>
            <EmptyState>Quando novos videos forem publicados, eles aparecem aqui.</EmptyState>
          </div>
        </Section>

        <Section title="3. Componentes da Web">
          <div className="grid gap-8">
            <MarketingHeader className="border border-va-border-lighter" />
            <SectionHeader />
            <div className="grid gap-6 md:grid-cols-2">
              <VideoCard />
              <TestimonialCard />
            </div>
            <div className="grid gap-2">
              <FaqItem />
              <FaqItem open={false} />
            </div>
            <MarketingFooter />
          </div>
        </Section>

        <Section title="4. Componentes do Portal do Aluno">
          <div className="grid gap-8 lg:grid-cols-[240px_minmax(0,1fr)]">
            <PortalSidebar />
            <div className="grid content-start gap-6">
              <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                <ChapterCard />
                <ChapterCard state="in-progress" />
                <ChapterCard state="completed" />
                <ChapterCard state="locked" />
              </div>
              <ProgressBar value={38} />
              <div className="flex flex-wrap gap-4">
                <StatIndicator />
                <MarkCompleteButton />
                <ContinueWatchingButton />
              </div>
              <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                <MaterialCard />
                <MaterialCard type="Audio" />
                <MaterialCard type="Spreadsheet" />
                <PlayerControls />
                <ExerciseField />
              </div>
              <BottomNavigation />
            </div>
          </div>
        </Section>

        <Section title="5. Estados de Conteudo">
          <div className="flex flex-wrap gap-3 rounded-va-lg bg-va-bg-white p-4">
            {contentStates.map((state) => (
              <ContentStatePill key={state} state={state} />
            ))}
          </div>
        </Section>
      </div>
    </main>
  );
}
