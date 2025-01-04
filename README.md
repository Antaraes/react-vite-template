Here's the updated **README.md** for the given `package.json`, excluding Redux Toolkit:

---

# React + TypeScript + Vite Template

This template provides a minimal setup for developing React applications with TypeScript, Vite, and an optimized developer experience. It includes essential libraries and tools for building modern, scalable applications.

---

## Features

- **React 18** with **TypeScript** for type-safe development.
- **Vite** for blazing-fast development and build performance.
- **React Query** for advanced data fetching and state management.
- **Tailwind CSS** with utility-first styling and animations.
- **Zod** for schema validation.
- Configured with ESLint for code quality and consistent styling.
- Husky and Commitlint for enforcing conventional commit messages.

---

## Getting Started

### Prerequisites

Make sure you have the following installed:

- **Node.js**: v16.0.0 or higher
- **npm** or **yarn**

---

### Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/your-username/react-ts-vite-template.git
cd react-ts-vite-template
npm install
```

---

### Usage

#### Development Server

Start the development server:

```bash
npm run dev
```

#### Linting

Run ESLint to check code quality:

```bash
npm run lint
```

#### Build for Production

Build the project for production:

```bash
npm run build
```

#### Preview Production Build

Preview the built project:

```bash
npm run preview
```

---

## ESLint Configuration

### Expanding the ESLint Configuration

For production-grade projects, enable type-aware lint rules:

1. Configure `parserOptions` in `eslint.config.js`:

   ```js
   export default tseslint.config({
     languageOptions: {
       parserOptions: {
         project: ["./tsconfig.node.json", "./tsconfig.app.json"],
         tsconfigRootDir: import.meta.dirname,
       },
     },
   });
   ```

2. Replace `tseslint.configs.recommended` with `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`.

3. Add React-specific linting rules:

   ```js
   import react from "eslint-plugin-react";

   export default tseslint.config({
     settings: { react: { version: "18.3" } },
     plugins: { react },
     rules: {
       ...react.configs.recommended.rules,
       ...react.configs["jsx-runtime"].rules,
     },
   });
   ```

---

## Included Libraries

### Dependencies

- **React**: Core library for building UI.
- **React Query**: Advanced data fetching and caching.
- **Tailwind CSS**: Utility-first CSS framework.
- **Lucide React**: Icon library for modern UIs.
- **Zod**: Schema validation library.

### Dev Dependencies

- **Vite**: Build tool and dev server.
- **TypeScript**: Type-safe JavaScript superset.
- **Tailwind CSS Plugins**: Includes animations and utility merging.
- **Husky**: Pre-commit hooks.
- **Commitlint**: Enforce commit message standards.
- **ESLint**: Code quality and linting.

---

## Setting Up Commit Standards

This template uses **Husky** and **Commitlint** to enforce conventional commit messages.

1. Install Husky hooks:

   ```bash
   npx husky install
   ```

2. Follow [Conventional Commits](https://www.conventionalcommits.org/) when committing changes.

---

## License

This template is open-source and available under the MIT License. Feel free to use and customize it as needed.

---

### Happy Coding! 🚀
