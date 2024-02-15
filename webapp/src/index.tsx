import { createRoot } from 'react-dom/client';
// Components
import App from './App';
// CSS

//Redux
import { store } from './store';
import { Provider } from 'react-redux';
import Themes from './Themes';

createRoot(document.getElementById('root') as HTMLElement).render(
    <Provider store={store}>
        <Themes theme={'dark'}>
            <App />
        </Themes>
    </Provider>
);
