import { createFileRoute, Link } from "@tanstack/react-router";

import heroHands from "@/assets/hero-hands.jpg";
import wordmark from "@/assets/hero.png";
import { SocialLinks } from "@/components/SocialLinks";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Portfólio Carol Justino" },
      {
        name: "description",
        content:
          "Portfólio de Carol C Justino: branding, websites, identidade visual, UX & UI, artes gráficas e filtros. Projetos no Behance.",
      },
      { property: "og:title", content: "Portfólio Carol Justino" },
      {
        property: "og:description",
        content:
          "Branding, websites, identidade visual, UX & UI e artes gráficas por Carol C Justino.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="grid min-h-screen grid-cols-1 lg:grid-cols-2">
      <h1 className="sr-only">Carol C Justino — designer de branding, web e UX/UI</h1>

      <div className="relative h-[42vh] overflow-hidden lg:h-screen">
        <img
          src={heroHands}
          alt="Detalhe da Criação de Adão com uma caneta pen tool conectando os dedos"
          className="size-full object-cover"
        />
      </div>

      <div className="flex flex-col items-center justify-center px-6 py-16 text-center lg:px-16">
        <img
          src={wordmark}
          alt="art. carol c justino"
          className="w-[min(26rem,80%)] animate-fade-up"
        />

        <div className="mt-8 flex animate-fade-up flex-wrap items-center justify-center gap-3">
          <Link
            to="/work"
            className="inline-flex items-center justify-center rounded-full bg-primary px-9 py-3 text-xs font-semibold tracking-[0.18em] text-primary-foreground uppercase transition-colors duration-300 hover:bg-accent hover:text-accent-foreground"
          >
            Meus trabalhos
          </Link>
          <Link
            to="/orcamento"
            className="inline-flex items-center justify-center rounded-full border border-primary px-9 py-3 text-xs font-semibold tracking-[0.18em] text-foreground uppercase transition-colors duration-300 hover:bg-accent hover:text-accent-foreground"
          >
            Peça um orçamento
          </Link>
        </div>

        <p className="mt-8 animate-fade-up text-sm text-accent">
          Branding | Website | Identidade Visual | UX &amp; UI | Artes Gráficas | Filtros
        </p>

        <SocialLinks className="mt-8 animate-fade-up justify-center" />
      </div>
    </main>
  );
}
