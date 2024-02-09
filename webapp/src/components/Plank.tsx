// Bootstrap
import 'bootstrap';
import { Container, NavDropdown, Navbar } from 'react-bootstrap';
// Ostalo

const Plank = () => {

    return (
        <div className="container">
            <div className="head">
                <Navbar fixed='top' expand='lg' className='bg-body-tertiary'>
                    <Container>
                        <Navbar.Brand href='/'>Plank</Navbar.Brand>
                        <NavDropdown title='Dropdown' id='plank-nanvropdown'>
                            <NavDropdown.Item href='#'>Dark Mode</NavDropdown.Item>
                            <NavDropdown.Item href='#'>User Settings</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href='#'>Log Out</NavDropdown.Item>
                        </NavDropdown>
                    </Container>
                </Navbar>
            </div>
        </div>

    );
}

export default Plank;