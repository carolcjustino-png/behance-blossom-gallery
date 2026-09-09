import { createFileRoute, Link } from "@tanstack/react-router";

import wordmark from "@/assets/hero.png";
import { SocialLinks } from "@/components/SocialLinks";

const WHATSAPP_URL =
  "https://wa.me/5531984099354?text=Ol%C3%A1%2C+gostaria+de+um+or%C3%A7amento+de+Design.";

export const Route = createFileRoute("/orcamento")({
  head: () => ({
    meta: [
      { title: "Orçamento — Carol C Justino" },
      {
        name: "description",
        content:
          "Peça um orçamento personalizado de branding, website, identidade visual, UX & UI ou artes gráficas com Carol C Justino pelo WhatsApp.",
      },
      { property: "og:title", content: "Orçamento — Carol C Justino" },
      {
        property: "og:description",
        content: "Fale comigo no WhatsApp e receba um orçamento personalizado para o seu projeto.",
      },
    ],
  }),
  component: Orcamento,
});

function Orcamento() {
  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-20 border-b border-border bg-background/85 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-4">
          <Link to="/" aria-label="Início">
            <img src={wordmark} alt="art. carol c justino" className="h-10 w-auto" />
          </Link>
          <nav className="flex items-center gap-6 text-xs tracking-[0.18em] uppercase">
            <Link to="/work" className="text-muted-foreground transition-colors hover:text-accent">
              Trabalhos
            </Link>
            <Link to="/orcamento" className="text-accent">
              Orçamento
            </Link>
          </nav>
        </div>
      </header>

      <main className="mx-auto flex max-w-3xl flex-col items-center px-6 pt-24 pb-32 text-center">
        <h1 className="font-display text-4xl leading-tight text-foreground sm:text-5xl">
          Vamos tirar seu projeto do papel?
        </h1>
        <p className="mt-3 text-sm tracking-[0.14em] text-accent uppercase">Request a quote</p>
        <p className="mt-6 max-w-xl text-sm leading-relaxed text-muted-foreground">
          Fale comigo pelo WhatsApp para pegar um orçamento personalizado. Respondido em até 2 dias
          úteis.
        </p>

        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noreferrer"
          className="mt-10 inline-flex items-center justify-center gap-3 rounded-full bg-primary px-9 py-3 text-xs font-semibold tracking-[0.18em] text-primary-foreground uppercase transition-colors duration-300 hover:bg-accent hover:text-accent-foreground"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" className="size-4" aria-hidden="true">
            <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm0 18.2c-1.5 0-3-.4-4.3-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.6-6.1c-.3-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1-.2.3-.7.8-.8 1-.1.2-.3.2-.6.1-.3-.1-1.1-.4-2.1-1.3-.8-.7-1.3-1.5-1.4-1.8-.2-.3 0-.5.1-.6l.4-.5c.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5 0-.1-.6-1.4-.8-1.9-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.2.3-.9.9-.9 2.1s.9 2.4 1 2.6c.1.2 1.8 2.8 4.3 3.9.6.3 1.1.4 1.4.5.6.2 1.2.2 1.6.1.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.2-1.3-.1-.2-.3-.3-.6-.4Z" />
          </svg>
          Orçamento pelo WhatsApp
        </a>
      </main>

      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-5 px-6 py-12 text-center">
          <p className="text-sm text-muted-foreground">
            Branding | Website | Identidade Visual | UX & UI | Artes Gráficas | Filtros
          </p>
          <SocialLinks />
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Carol C Justino
          </p>
        </div>
      </footer>
    </div>
  );
}
