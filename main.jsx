import { createRoot } from 'react-dom/client';
import App from './src/Pages/App.jsx';


const container = document.getElementById('app');

createRoot(container).render(<App />)