import Login from './components/Login';
import Signup from './components/Signup';
import DailyView from './components/calendar/DailyView';
import MainPage from './components/calendar/MainPage';

import { BrowserRouter, Routes, Route } from 'react-router-dom';


const App: React.FC = () => (
    //TD3
    <BrowserRouter>
        <Routes>
            {/* <Route path='/' element={<Login />} /> */}
            <Route path='/' element={<Login />} />
            <Route path='signup' element={<Signup />} />
        </Routes>
    </BrowserRouter>
);

export default App;