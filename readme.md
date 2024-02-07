# Prueba tecniva

## Problema

- Facts Ramdom: https://catfact.ninja/fact
- Image random: https://cataas.com/cat/says/hello

- Recuperar un hecho aleatorio de gatos de la primera api
- Recuperar la primera palabra del hecho
- Muestra una imagen de un gato con la primera palabra

## Pasos

1. Crear proyecto en blanco ``npm create vite@latest my-vue-app -- --template vanilla``
1. Instalando dependencias
    ```
    npm install @vitejs/plugin-react sass sass-loader -D
    npm install react react-dom
    ```
1.  Punto de entrada de nuestra aplicación en `main.js`
    ```javascript
    import { createRoot } from 'react-dom/client';

    const container = document.getElementById('app');

    createRoot(container).render('Hola Mundo')
    ```
1. Cambiar la extención de `main.js` a `main.jsx`
1. ¡Instala el linter! Es un momento
    1. Instalar ``npm install standard -D``
    1. En `package.json`
    ```json
    ...
    "eslintConfig": {
        "extends": "./node_modules/standard/eslintrc.json"
    }
    ```
1. Crear el componente React en `src/Pages/App.jsx`
    1. Componente
        ```jsx
        export default function App() {
            return (<h1>Hola mundo</h1>)
        }
        ```
    1. Importar componente
        ```jsx
        ...
        import App from './src/Pages/App.jsx';
        ...
        createRoot(container).render(<App />)
        ```
1. Crear nuestro primer estado