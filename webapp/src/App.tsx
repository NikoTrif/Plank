import Login from './components/Login';
import Signup from './components/Signup';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Plank from './components/Plank';


const App: React.FC = () => (
    //TD3
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Login />} />
            {/* <Route path='/' element={<Plank />} /> */}
            <Route path='/login' element={<Login />} />
            <Route path='signup' element={<Signup />} />
            <Route path='plank' element={<Plank />} />
        </Routes>
    </BrowserRouter>
);

export default App;