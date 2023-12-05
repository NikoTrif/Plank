import "bootstrap/dist/css/bootstrap.min.css"; // Bootstrap CSS
import "bootstrap/dist/js/bootstrap.bundle.min"; // Bootstrap Bundle JS
import '../styles/signup/signup.scss';

//TD2a
function SignUp() {
    return ( 
        <div className="container signup">
            <h2>Sign Up</h2>
            <form className="form" action="submit">
                <label className="form-label" htmlFor="email">e-mail</label>
                <input className="form-control" type="email" name="email" id="email" />
                <label className="form-label" htmlFor="password">Password</label>
                <input className="form-control" type="password" name="password" id="password" />
                <label className="form-label" htmlFor="conform-password">Conform password</label>
                <input className="form-control" type="password" name="conform-password" id="conform-password" />
                <button className="btn btn-success" type="submit">Sign Up</button>
            </form>
        </div>
     );
}

export default SignUp;