//CSS
import '../styles/login/login.scss';
//Bootstrap CSS
import "bootstrap";
//Ostalo
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetctUserByLogin, UserState } from '../slices';
import { AppDispatch } from '../store';
import { ReactElement, useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';

// Types and interfaces
interface IUserState {
    user: UserState
}

interface E {
    target: {
        value: string
    }
}

//TD1a
const Login: React.FC =  () => {
    const state = useSelector(state => state) as IUserState;
    const dispatch = useDispatch<AppDispatch>();
    const { user } = state as IUserState;

    const [userAuth, setUserAuth] = useState({ email: '', password: '' });

    useEffect(() => {
        console.log(user);

        // Continues to /main
        if (user.error !== undefined) {
            alert(user.error);
            return;
        }

        if (user.id !== undefined) {
            window.location.href = `/plank?id=${user.id}`
        }
    }, [user]);

    const pending = (): string | ReactElement => {
        if (!user.loading) {
            return 'Login'
        } else {
            return <Spinner size='sm' />
        }
    }

    const emailOnChange = (e: E) => {
        setUserAuth({ email: e.target.value, password: userAuth.password });

    }

    const passwordOnChange = (e: E) => {
        setUserAuth({ email: userAuth.email, password: e.target.value });
    }

    const login = async (e: any) => {
        e.preventDefault();

        if (userAuth.email === "") {
            alert("Error: Enter e-mail address");
            return;
        }
        if (userAuth.email.indexOf('@') === -1
            || userAuth.email.indexOf('@') === 0
            || userAuth.email.indexOf('@') === userAuth.email.length - 1) {
            alert('Error: e-mail is not right');
            return;
        }
        if (userAuth.password === "") {
            alert('Error: Enter password');
            return;
        }

        await dispatch(fetctUserByLogin([{ email: userAuth.email, password: userAuth.password }]));
    }

    return (
        <div className='login'>
            <img src={require('../img/login.png')} alt="Login Image" />
            <form className='form'>
                <label className='form-label' htmlFor="email">e-mail</label>
                <input className='form-control' type="email" name="email" id="email" onChange={(e) => emailOnChange(e)} />
                <label className='form-label' htmlFor="password">Password</label>
                <input className='form-control' type="password" name="password" id="password" onChange={(e) => passwordOnChange(e)} />
                <Link className='login-button btn btn-success' onClick={(e) => login(e)} to='/main'>{pending()}</Link>
                <Link className='signlink link-primary' to={'/signup'}>Sign Up</Link>
            </form>
        </div>
    );
}

export default Login;