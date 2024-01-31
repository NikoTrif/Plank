import '../styles/login/login.scss';
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import { Component, ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { variables } from '../Variables';

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
        this.setState({email: e.target.value});
    }

    passwordOnChange(e: E) {
        this.setState({password: e.target.value});
    }

    login() {
        const {email, password} = this.state;

        if(email === ""){
            alert("Error: Enter e-mail address");
            return;
        }

        if(email.indexOf('@') === -1
        ||email.indexOf('@') === 0
        ||email.indexOf('@') === email.length -1){
            alert('Error: e-mail is not right');
            return;
        }

        if(password === ""){
            alert('Error: Enter password');
            return;
        }

        fetch(variables.API_URL + 'Users', {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: email,
                password: password
            })
        }).then(res => res.json()).then(result => alert(result), (error) => {alert('Failed')});
    }

    render(): ReactNode {
        return (
            <div className='login'>
                <img src={require('../img/login.png')} alt="Login Image" />
                <form className='form'>
                    <label className='form-label' htmlFor="email">e-mail</label>
                    <input className='form-control' type="email" name="email" id="email" onChange={(e) => this.emailOnChange(e)} />
                    <label className='form-label' htmlFor="password">Password</label>
                    <input className='form-control' type="password" name="password" id="password" onChange={(e) => this.passwordOnChange(e)}/>
                    <button className='btn btn-success'>Login</button>
                    <Link className='link-primary' to={'/signup'} onSubmit={() => this.login()}>Sign Up</Link>
                </form>
            </div>
        );
    };
}

export default Login;