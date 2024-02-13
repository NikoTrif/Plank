import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Login, Plank, Signup, UserSettings } from './allComponents';


const App: React.FC = () => (
    //TD3
    <BrowserRouter>
        <Routes>
            {/* <Route path='/' element={<Login />} /> */}
            <Route path='/' element={<Plank />} />
            <Route path='/login' element={<Login />} />
            <Route path='signup' element={<Signup />} />
            <Route path='plank' element={<Plank />} />
            <Route path='/settings' element={<UserSettings />} />
        </Routes>
    </BrowserRouter>
);

export default App;