import { createFileRoute, Link } from "@tanstack/react-router";

import wordmark from "@/assets/hero.png";
import { SocialLinks } from "@/components/SocialLinks";
import { projects } from "@/data/projects";

export const Route = createFileRoute("/work")({
  head: () => ({
    meta: [
      { title: "Trabalhos — Carol C Justino" },
      {
        name: "description",
        content:
          "Seleção de projetos de branding, websites, identidade visual, UX & UI e artes gráficas de Carol C Justino, com links para os cases no Behance.",
      },
      { property: "og:title", content: "Trabalhos — Carol C Justino" },
      {
        property: "og:description",
        content:
          "Projetos de branding, websites, identidade visual e UX & UI, com cases no Behance.",
      },
    ],
  }),
  component: Work,
});

function Work() {
  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-20 border-b border-border bg-background/85 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-4">
          <Link to="/" aria-label="Início">
            <img src={wordmark} alt="art. carol c justino" className="h-10 w-auto" />
          </Link>
          <div className="flex items-center gap-6">
            <Link
              to="/orcamento"
              className="text-xs tracking-[0.18em] text-muted-foreground uppercase transition-colors hover:text-accent"
            >
              Orçamento
            </Link>
            <SocialLinks className="hidden sm:flex" />
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-6 pt-14 pb-24">
        <h1 className="font-display text-4xl leading-tight text-foreground sm:text-5xl">
          Alguns dos meus trabalhos:
        </h1>
        <p className="mt-3 text-sm tracking-[0.14em] text-accent uppercase">Some of my work</p>

        <ul className="mt-14 grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <li key={project.href + project.title}>
              <a
                href={project.href}
                target="_blank"
                rel="noreferrer"
                className="group block focus:outline-none"
              >
                <div className="overflow-hidden rounded-md bg-muted">
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    className="aspect-video w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                </div>
                <div className="mt-4">
                  <p className="text-xs tracking-[0.2em] text-accent uppercase">
                    {project.year}
                    {project.behance ? " · Behance" : ""}
                  </p>
                  <h2 className="mt-1 font-display text-lg text-foreground transition-colors duration-300 group-hover:text-accent">
                    {project.title}
                  </h2>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </main>

      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-5 px-6 py-12 text-center">
          <p className="text-sm text-muted-foreground">
            Branding | Website | Identidade Visual | UX &amp; UI | Artes Gráficas | Filtros
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
