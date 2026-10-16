# Portfolio // Lucas Perrone Ramos

> Backend Developer · Architectural Minimalist & Precision Engineering  
> Baseado no Design System **High Velocity Editorial** via Google Stitch.

---

## ⚡ Tecnologias

- **Framework**: [React 19](https://react.dev/)
- **Linguagem**: [TypeScript](https://www.typescriptlang.org/)
- **Build Tool**: [Vite 8](https://vite.dev/)
- **Estilização**: [Tailwind CSS v4](https://tailwindcss.com/) com `@tailwindcss/vite`
- **Linter**: [Oxlint](https://oxc.rs/)
- **Tipografia**: Barlow Condensed, Inter & JetBrains Mono

---

## 🚀 Como Executar

Instalar dependências:
```bash
npm install
```

Iniciar servidor de desenvolvimento local:
```bash
npm run dev
```

Executar validação e build de produção:
```bash
npm run lint
npm run build
```

---

## 📐 Estrutura do Projeto

```
Portfolio/
├── DESIGN.md                  # Documentação do Design System
├── index.html                 # Entry point HTML com fontes e ícones
├── src/
│   ├── assets/images/         # Imagens locais dos cases e perfil
│   ├── components/
│   │   ├── layout/            # Header e Footer
│   │   └── sections/          # Hero, Sobre, Experiência, Projetos, TechStack, Contato
│   ├── data/                  # Base de dados centralizada do portfólio
│   ├── styles/                # Tokens do Design System em TypeScript
│   ├── types/                 # Interfaces TypeScript
│   ├── App.tsx                # Composição da aplicação
│   ├── index.css              # Configuração Tailwind v4 @theme e utilitários
│   └── main.tsx               # Entry point React
└── vite.config.ts             # Configuração Vite + React + Tailwind
```
