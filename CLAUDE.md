# CLAUDE.md

Este arquivo fornece orientações ao Claude Code (claude.ai/code) ao trabalhar com o código deste repositório.

## Idioma

Sempre responda em português brasileiro, independentemente do idioma da pergunta.

## Comandos

```bash
npm run dev        # inicia o servidor de desenvolvimento (Vite, hot reload)
npm run build      # verificação de tipos + build de produção
npm run lint       # ESLint
npm run preview    # pré-visualiza o build de produção localmente
```

Nenhuma suíte de testes está configurada.

## Arquitetura

Este é um portfólio em React 19 + TypeScript construído com Vite e Framer Motion. O conceito visual é uma **cena de mesa de trabalho**: uma mesa de madeira (`Mesa`) com um abajur (`Abajur`) e um caderno (`Caderno`) como peça central.

### Estado

`App.tsx` possui um único estado booleano `luzAcesa` (luz ligada/desligada) e o passa como props. Alternar a luz muda filtros de brilho no caderno, abajur e overlays para simular um ambiente iluminado ou escuro.

### Árvore de componentes

```
App
└── PgPrincipal           # compõe a cena completa
    ├── Mesa              # div com background-image (mesa-de-madeira.jpg)
    ├── .penumbra-overlay # overlay escuro translúcido, opacidade vinculada a luzAcesa
    ├── .luz-direcional   # brilho de luz radial, visível apenas quando luzAcesa=true
    ├── Abajur            # .abajur-wrapper > abajur-img + BotaoAbajur
    └── Caderno           # gerencia estado de página; anima com Framer Motion
        ├── MarcadorSobre     # <button> CSS Module; onClick → virarPara(0)
        ├── MarcadorProjetos  # <button> classe global; onClick → virarPara(1)
        ├── MarcadorContatos  # <button> classe global; onClick → virarPara(2)
        ├── espiral-img       # imagem sobreposta ao caderno (z-index: 10)
        └── AnimatePresence   # alterna entre 3 motion.div (páginas 0/1/2)
```

### Abordagem de estilos

- **Estilos globais** em `src/App.css` — layout do caderno, abajur, espiral, marcadores, overlays.
- **CSS Modules** apenas para `MarcadorSobre` (`MarcadorSobre.module.css`); os outros dois marcadores usam classes globais (`.marcador-projetos`, `.marcador-contatos`) definidas em `App.css`.
- Tipografia: `'Caveat'` / `'Comic Sans MS'` cursiva em todo o projeto para o visual de escrita à mão.
- Assets estáticos (imagens) ficam em `public/` e são referenciados como caminhos absolutos (`/abajur.png`, `/espiralRecortado.jpg`, `/mesa-de-madeira.jpg`, `/botao_abajur.png`).

### Marcadores (abas de navegação)

São `<button>` posicionados de forma absoluta em relação ao `.caderno-outer` e "saem" pela lateral direita. `MarcadorSobre` usa CSS Module; `MarcadorProjetos` e `MarcadorContatos` usam classes CSS globais. Todos recebem `onClick` e chamam `virarPara(índice)` em `Caderno`.

## Roadmap

```
[ ] Cena base (mesa, abajur, caderno)  
[ ] Toggle de luz
[ ] Marcadores
[ ] Responsividade básica
[ ] Animação de virar página (Framer Motion)
[ ] Conteúdo real das páginas (Sobre, Projetos, Contatos)
   [ ] Foto ou avatar na página Sobre
   [ ] URL de cada projeto
[ ] SVG do abajur (substituir PNG)
[ ] Deploy (Vercel/Netlify)
```