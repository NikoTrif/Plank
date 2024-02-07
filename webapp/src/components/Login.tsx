import '../styles/login/login.scss';
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import { Component, ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { variables } from '../Variables';
import axios from 'axios';

interface IProps {

}

interface IState {
    email: string,
    password: string
}

interface E {
    target: {
        value: string
    }
}

//TD1a
class Login extends Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);

        this.state = {
            email: "",
            password: ""
        }
    }

    emailOnChange(e: E) {
        this.setState({ email: e.target.value });
    }

    passwordOnChange(e: E) {
        this.setState({ password: e.target.value });
    }

    async login(e: any) {
        e.preventDefault();

        if (this.state.email === "") {
            alert("Error: Enter e-mail address");
            return;
        }

        if (this.state.email.indexOf('@') === -1
            || this.state.email.indexOf('@') === 0
            || this.state.email.indexOf('@') === this.state.email.length - 1) {
            alert('Error: e-mail is not right');
            return;
        }

        if (this.state.password === "") {
            alert('Error: Enter password');
            return;
        }

        try {
            const response = await axios({
                method: 'get',
                url: `${variables.API_URL}Users`,
                params: {
                    email: this.state.email,
                    UserPassword: this.state.password
                }
            });
    
            const {data} = response;
            console.log(data);
    
            // Continues to /main
            if (data?.length === 1 && data[0]?.email === this.state.email && data[0]?.UserPassword === this.state.password) {
                window.location.href = `/plank?id=${data[0].id}`
            } else {
                alert("User doesn't exist");
            }
        } catch (error) {
            console.log(error);;
        }
    }

    render(): ReactNode {
        return (
            <div className='login'>
                <img src={require('../img/login.png')} alt="Login Image" />
                <form className='form'>
                    <label className='form-label' htmlFor="email">e-mail</label>
                    <input className='form-control' type="email" name="email" id="email" onChange={(e) => this.emailOnChange(e)} />
                    <label className='form-label' htmlFor="password">Password</label>
                    <input className='form-control' type="password" name="password" id="password" onChange={(e) => this.passwordOnChange(e)} />
                    <Link className='login-button btn btn-success' onClick={(e) => this.login(e)} to='/main'>Login</Link>
                    <Link className='signlink link-primary' to={'/signup'}>Sign Up</Link>
                </form>
            </div>
        );
    };
}

export default Login;