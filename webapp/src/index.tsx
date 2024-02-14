import { createRoot } from 'react-dom/client';
import App from './App';
import './styles/main.scss';

//Redux
import { store } from './store';
import { Provider } from 'react-redux';

createRoot(document.getElementById('root') as HTMLElement).render(
    <Provider store={store}>
        <App />
    </Provider>
);
