# Portfólio Interativo - React + TypeScript + Vite

Este projeto é um portfólio interativo desenvolvido com **React**, **TypeScript** e **Vite**.  
O objetivo é apresentar informações de forma criativa, simulando um cenário de mesa com caderno, abajur e efeitos visuais, incluindo animações com **Framer Motion**.

## Funcionalidades

- Interface visual simulando um caderno sobre uma mesa
- Abajur de mesa posicionado ao lado do caderno
- Botão interativo sobre a base do abajur
- Efeito de penumbra para simular ambiente com pouca luz
- Animações suaves nos botões do menu usando Framer Motion
- Layout responsivo e estilizado com CSS

## Tecnologias Utilizadas

- [React](https://react.dev/)  
- [TypeScript](https://www.typescriptlang.org/)  
- [Vite](https://vitejs.dev/)  
- [Framer Motion](https://www.framer.com/motion/)  
- CSS3

## Como executar o projeto

1. Instale as dependências:
   ```bash
   npm install
   ```
2. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```
3. Acesse `http://localhost:5173` no navegador.

## Estrutura do Projeto

- `src/App.tsx`: Componente principal da aplicação
- `src/App.css`: Estilos personalizados do cenário
- `public/`: Imagens utilizadas no cenário (caderno, abajur, botão, etc.)

## Personalização

Você pode alterar as imagens na pasta `public` para personalizar o cenário, ajustar estilos no `App.css` e adicionar novas animações com Framer Motion.

## Licença

Este projeto é apenas para fins de estudo e portfólio.

---

Desenvolvido por Leonam Santorum

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      ...tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      ...tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      ...tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
