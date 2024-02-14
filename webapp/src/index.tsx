import { createRoot } from 'react-dom/client';
// Components
import App from './App';
// CSS
import './styles/bootstrap-darkly.css';

//Redux
import { store } from './store';
import { Provider } from 'react-redux';

createRoot(document.getElementById('root') as HTMLElement).render(
    <Provider store={store}>
        <App />
    </Provider>
);
