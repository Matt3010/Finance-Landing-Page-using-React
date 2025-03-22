# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

official plugin available:


- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


| Feature                   | `tsc` (TypeScript Compiler) | Babel                        | SWC                          | esbuild                     | tsup / vite / rollup          |
|---------------------------|------------------------------|------------------------------|------------------------------|------------------------------|-------------------------------|
| **Written In**            | TypeScript (JS)              | JavaScript                   | Rust (super fast)            | Go (super fast)              | Depends (uses esbuild or swc) |
| **Speed**                 | 🐢 Slow                      | 🐢 Slow (faster with cache)  | 🚀 Very fast                  | 🚀 Very fast                  | 🚀 Very fast                   |
| **Type Checking**         | ✅ Yes                       | ❌ No                         | ❌ No (transpile only)        | ❌ No                         | ❌ No                          |
| **Transpilation (TS → JS)** | ✅ Yes                      | ✅ Yes (via plugin)           | ✅ Yes (core feature)         | ✅ Yes                        | ✅ Yes                         |
| **Tree Shaking**          | ❌ No                        | ✅ Partial (via bundler)     | ✅ Yes (if bundling)          | ✅ Yes                        | ✅ Yes                         |
| **JSX Support**           | ✅ (with config)             | ✅                            | ✅ (React, Next.js, etc.)     | ✅                           | ✅                            |
| **Config Complexity**     | 😵‍💫 Moderate               | 😵‍💫 Moderate               | 😎 Simple                    | 😎 Simple                    | 😎 Simple                     |
| **Use in Production**     | ✅ Yes                       | ✅ Yes                        | ✅ Yes (Next.js, Turbopack)   | ✅ Yes                        | ✅ Yes                         |
| **Bundle Capabilities**   | ❌ No                        | ❌ No                         | ✅ Yes (with swc-cli/spack)   | ✅ Yes                        | ✅ Yes                         |


## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    'react-x': reactX,
    'react-dom': reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs['recommended-typescript'].rules,
    ...reactDom.configs.recommended.rules,
  },
})
```
