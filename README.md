# Carol C. Justino — Portfólio

Site de portfólio de design da Carol C. Justino, com galeria de projetos, links para o Behance e página de orçamento via WhatsApp.

## Desenvolvimento local

Você precisa de Node.js e npm — [instale com nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone https://github.com/carolcjustino-png/behance-blossom-gallery.git
cd behance-blossom-gallery
npm i
npm run dev
```

## Publicar na Vercel

1. Em [vercel.com](https://vercel.com), clique em **Add New → Project** e importe o repositório `carolcjustino-png/behance-blossom-gallery`.
2. A Vercel detecta o Vite automaticamente. Configure:
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist` (padrão do framework)
   - **Install Command**: `npm install`
3. Adicione as variáveis de ambiente (em **Project Settings → Environment Variables**):
   - `VITE_SUPABASE_PROJECT_ID`
   - `VITE_SUPABASE_PUBLISHABLE_KEY`
   - `VITE_SUPABASE_URL`
   (os valores estão no painel do Lovable, em Cloud → Settings)
4. Clique em **Deploy**.

## Built with

- TanStack Start
- TypeScript
- React
- Tailwind CSS
