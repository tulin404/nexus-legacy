# Nexus Legacy — refatoração Next.js / Tailwind CSS v4

Estrutura modular baseada no HTML fornecido.

## Estrutura

- `src/app/layout.tsx` — layout global.
- `src/app/page.tsx` — composição da Home.
- `src/app/globals.css` — Tailwind CSS v4 + `@theme`.
- `src/components/Header.tsx` — cabeçalho.
- `src/components/Footer.tsx` — rodapé.
- `src/components/home` — hero e heading reutilizável.
- `src/components/kit` — Kit História e modal.
- `src/components/gallery` — galeria e cards.
- `src/components/restoration` — restauração e slider.
- `src/components/about` — seção institucional.
- `src/components/cart` — contexto e interações do carrinho.
- `src/lib` — utilitários puros.

Não foi criada uma `Sidebar`, porque não existe uma lateral no HTML de origem.
