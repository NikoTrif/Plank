import '../styles/login/login.scss';
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetctUserByLogin, UserState } from '../slices';
import { AppDispatch } from '../store';
import { useEffect, useState } from 'react';

interface IUserState {
    user: UserState
}

interface E {
    target: {
        value: string
    }
}

//TD1a
function Login() {
    const state = useSelector(state => state) as IUserState;
    const dispatch = useDispatch<AppDispatch>();
    const { user } = state as IUserState;
    
    const [userAuth, setUserAuth] = useState({email: '', password: ''});

    useEffect(() => {
        console.log(user);

    }, [user]);

    const emailOnChange = (e: E) => {
        setUserAuth({email: e.target.value, password: userAuth.password});

    }

    const passwordOnChange = (e: E) => {
        setUserAuth({email: userAuth.email, password: e.target.value});
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
            dispatch(fetctUserByLogin([{ email: userAuth.email, password: userAuth.password }]));

        // const data: Data[] | AxiosError<any, any> = await new UserApi(this.state.email, this.state.password).Get();
        // console.log(data);



        // if (!isAxiosError(data) && typeof (data) !== undefined) {
        //     // Continues to /main
        //     if (data?.length === 1) {
        //         window.location.href = `/plank?id=${data[0].id}`
        //     } else if (data?.length !== 1) {
        //         alert('ERROR: User or password error');
        //     } else {
        //         alert("ERROR: User doesn't exist");
        //     }
        // } else {
        //     alert(`ERROR: Network Error`)
        // }
    }
    return (
        <div className='login'>
            <img src={require('../img/login.png')} alt="Login Image" />
            <form className='form'>
                <label className='form-label' htmlFor="email">e-mail</label>
                <input className='form-control' type="email" name="email" id="email" onChange={(e) => emailOnChange(e)} />
                <label className='form-label' htmlFor="password">Password</label>
                <input className='form-control' type="password" name="password" id="password" onChange={(e) => passwordOnChange(e)} />
                <Link className='login-button btn btn-success' onClick={(e) => login(e)} to='/main'>Login</Link>
                <Link className='signlink link-primary' to={'/signup'}>Sign Up</Link>
            </form>
        </div>
    );
}

export default Login;