import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css"; // Bootstrap CSS
import "bootstrap/dist/js/bootstrap.bundle.min"; // Bootstrap Bundle JS
import '../styles/signup/signup.scss';
import { variables } from '../Variables';

interface IProps {

}

interface IState {
    email: string,
    password: string,
    conformedPassword: string
}

interface E {
    target: {
        value: string
    }
}


//TD2a
class SignUp extends Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);

        this.state = {
            email: "",
            password: "",
            conformedPassword: ""
        }
    }


    emailOnChange = (e: E) => {
        this.setState({ email: e.target.value });
    }
    passwordOnChange = (e: E) => {
        this.setState({ password: e.target.value });
    }
    conformedPasswordOnChange = (e: E) => {
        this.setState({ conformedPassword: e.target.value });
    }

    signUp() {
        // const {email, password, conformedPassword}: any = this.state; //type any resiti

        if (this.state.password !== this.state.conformedPassword) {
            alert('Error: Password is not matching!');
            return;
        }

        if(this.state.password === "" || this.state.conformedPassword === ""){
            alert("Error: Password can't be empty");
            return;
        }
        
        if(!this.state.email.includes('@')
         || this.state.email.indexOf('@') === 0
         || this.state.email.indexOf('@') === this.state.email.length - 1){
            alert('Error: e-mail is not right');
            return;
        }

        fetch(variables.API_URL + 'Users', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: this.state.email,
                UserPassword: this.state.password
            })
        }).then(res => res.json()).then((result) => alert(result), (error) => { alert('Failed') });
    }

    render(): React.ReactNode {
        return (
            <div className="container signup">
                <h2>Sign Up</h2>
                <form className="form" action="submit">
                    <label className="form-label" htmlFor="email">e-mail</label>
                    <input className="form-control" type="email" name="email" id="email" onChange={(e) => this.emailOnChange(e)} />
                    <label className="form-label" htmlFor="password">Password</label>
                    <input className="form-control" type="password" name="password" id="password" onChange={(e) => this.passwordOnChange(e)} />
                    <label className="form-label" htmlFor="conform-password">Conform password</label>
                    <input className="form-control" type="password" name="conform-password" id="conform-password" onChange={(e) => this.conformedPasswordOnChange(e)} />
                    <button className="btn btn-success" type="button" onClick={() => this.signUp()}>Sign Up</button>
                </form>
            </div>
        );
    }
}

export default SignUp;