// CSS
import '../styles/plank/plank.scss';
// Bootstrap
import 'bootstrap';
import { Container, FormCheck, NavDropdown, Navbar } from 'react-bootstrap';
// Ostalo
import { useState } from 'react';
import { MonthlyView, WeaklyView, DailyView } from '../allComponents';
import { useDispatch, useSelector } from 'react-redux';
import { darkModeToggle, IDarkMode } from '../slices'

//Types and interfaces
type IView = 30 | 7 | 1;



const Plank: React.FC = () => {
    const state = useSelector(state => state);
    const dispatch = useDispatch();
    const [View, setView] = useState(30 as IView);
    const { darkMode } = state as IDarkMode;

    const view = () => {
        switch (View) {
            case 30:
                return <MonthlyView />
            case 7:
                return <WeaklyView />
            case 1:
                return <DailyView />
        }
    }

    const periodClick = (period: IView) => {
        setView(period);
    }

    // const logoutClick = () => {
    //     // Before this, state.user.id and state.user.logedin (when made) should be reset
    //     window.location.href='/login';
    // }

    // const settingsClick = () => {
    //     window.location.href = '/settings';
    // }

    return (
        <Container>
            {/**Navbar */}
            <Navbar fixed='top' expand='lg' className='bg-dark'>
                <Container>
                    <Navbar.Brand href='/'>Plank</Navbar.Brand>
                    <NavDropdown title='User' id='plank-nanvropdown'>
                        <FormCheck type='switch' id='custom-switch' label='Dark Mode' checked={darkMode} onChange={() => dispatch(darkModeToggle())} />
                        <NavDropdown.Item href='settings'>User Settings</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href='login'>Log Out</NavDropdown.Item>
                    </NavDropdown>
                </Container>
            </Navbar>

            <div className='view-buttons'>
                <button onClick={() => periodClick(1)} className='btn btn-primary'>Daily View</button>
                <button onClick={() => periodClick(7)} className='btn btn-primary'>Weakly View</button>
                <button onClick={() => periodClick(30)} className='btn btn-primary'>Monthly View</button>
            </div>

            <div className='view'>
                {view()}
            </div>

        </Container>

    );
}

export default Plank;
