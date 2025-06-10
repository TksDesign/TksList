# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.



## pour deployer run le dist en local
 -npx serve dist
 ou 
 -npm install -g serve 
   serve dist
-installation de gh-pages
  npm install gh-pages --save-dev
-ajout de la ligne suivannte direct dans package json apres la ligne private:true
  "homepage": "https://TksDesign.github.io/TksList",
-ajout de ces deux instructions dans le le scipts depuis package json
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
