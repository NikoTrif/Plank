import '../styles/login/login.scss';
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";

//TD1a
const Login: React.FC = () => {
    return (
        <div className='login'>
            <img src={require('../img/login.png')} alt="Login Image" />
            <form className='form'>
                <label className='form-label' htmlFor="email">e-mail</label>
                <input className='form-control' type="email" name="email" id="email" />
                <label className='form-label' htmlFor="password">Password</label>
                <input className='form-control' type="password" name="password" id="password" />
                <button className='btn btn-success'>Login</button>
                <a href="/signup" className='link-primary'>SignUp</a>
            </form>
        </div>
    );
};

export default Login;